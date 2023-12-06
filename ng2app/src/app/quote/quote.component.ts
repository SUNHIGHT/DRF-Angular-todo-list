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
    this.quoteService.getAllQuote().then(quotes => this.quotes = quotes);
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

  delete(id:number):void {
    this.quoteService.delete(id).then(() => {
      this.modalService.dismissAll();
    })
    .catch(error => {
      console.error('Error deleting quotes',error);
    });
  }

  update(id:number): void{
    let updatedQuote = new Quote();
    updatedQuote.id = id;

    this.quoteService.update(updatedQuote).then(updated => {
      const index = this.quotes.findIndex(quote => quote.id === id);
      if(index !==  -1){
        this.quotes[index] = updated;
      }
    }).catch(error => {
      console.error('Error updatting quote',error);
    })
  }
}
