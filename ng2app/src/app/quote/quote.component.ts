import { Component,OnInit,Input } from '@angular/core';
import{ QuoteService } from '../service/quote.service';
import { Quote } from './quote.model';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { UpdateMode } from '@angular/compiler-cli/src/ngtsc/program_driver';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent implements OnInit{
  quotes: Quote[] = [];
  newquotes: Quote[] = [];
  @Input() quote: Quote = new Quote();
  operationType: 'create' | 'edit' | 'delete' = 'create';

  constructor(
    private quoteService: QuoteService,
    public modalService: NgbModal
  ){}

  ngOnInit(): void {
    this.quoteService.getAllQuote().then(quotes => {
        this.quotes = quotes.map(q => ({ ...q, isEditing: false }));
    });
  }

  toggleEdit(quote: Quote): void {
    quote.isEditing = !quote.isEditing;
  }

  save():void {
    if(this.operationType === 'create'){
      this.quoteService.create(this.quote).then(data =>{
        this.getNewQuote();
        this.modalService.dismissAll();
      })
    }else if(this.operationType ==='edit'){
      this.quoteService.update(this.quote).then(updated => {
        this.modalService.dismissAll();
      })
    }
  }

  getNewQuote():void{
    this.quoteService.getNewQuote().then(res => {this.pushData(res)});
  }

  pushData(data: Quote): void{
    this.newquotes.unshift(data);
  }

  update(id: number): void {
    let updatedQuote = this.quotes.find(q => q.id === id);
    if (updatedQuote) {
        this.quoteService.update(updatedQuote).then(updated => {
            const index = this.quotes.findIndex(quote => quote.id === id);
            if (index !== -1) {
                this.quotes[index] = { ...updated, isEditing: false };
            }
        }).catch(error => {
            console.error('Error updating quote', error);
        });
    }
  }
  delete(id: number): void {
    this.quoteService.delete(id).then(() => {
        this.quotes = this.quotes.filter(quote => quote.id !== id);
    }).catch(error => {
        console.error('Error deleting quotes', error);
    });

  }
}