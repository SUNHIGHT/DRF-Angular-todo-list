import { Injectable } from '@angular/core'
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Quote } from '../quote/quote.model'

@Injectable({
    providedIn: 'root'
})
export class QuoteService{
    private Url = 'http://127.0.0.1:8000/api/quote/';
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient){}

    getAllQuote():Promise<Quote[]>{
        return this.http.get<Quote[]>(this.Url).toPromise().then(response => response as Quote[]);
    }

    create(quote: Quote): Promise<Quote>{
        return this.http.post<Quote>(this.Url,quote,{headers: this.headers}).toPromise().then(response =>{
            if(!response){
                throw new Error('No response from server');
            }
            return response;
        })
        .catch(this.handleError);
    }

    getNewQuote(): Promise<Quote>{
        return this.http.get<Quote[]>(this.Url + "?limit=1").toPromise().then(response => {
            if(!response || response.length === 0){
                throw new Error('No new quotes found');
            }
            return response[0];
        })
        .catch(this.handleError);
    }

    delete(id:number): Promise<void>{
        const url =`${this.Url}${id}/`;
        return this.http.delete(url, {headers: this.headers}).toPromise().then(() => null) .catch(this.handleError);
    }

    update(quote:Quote): Promise<Quote>{
        const url =`${this.Url}${quote.id}/`;
        return this.http.put<Quote>(url,quote,{ headers: this.headers}).toPromise().then(response => {
            if(!response){
                throw new Error('No response from server');
            }
            return response;
        })
        .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // 開発用途のログ
        return Promise.reject(error.message || error);
      }
}