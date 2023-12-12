import { Injectable } from '@angular/core'
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Diary } from '../diary/diary.model'

@Injectable({
    providedIn:'root'
})
export class DiaryService{
    private Url = 'http://127.0.0.1:8000/api/diary';
    private headers = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http:HttpClient){}

    getAllDiary():Promise<Diary[]>{
        return this.http
            .get<Diary[]>(this.Url)
            .toPromise()
            .then(response => response as Diary[]);
    }

    create(diary:Diary):Promise<Diary>{
        return this.http
            .post<Diary>(this.Url,diary,{headers:this.headers})
            .toPromise()
            .then(response => {
                if(!response){
                    throw new Error('No response from server');
                }
                return response;
            })
            .catch(this.handleError);
    }

    delete(id:number):Promise<void>{
        const url = `${this.Url}${id}/`;
        return this.http
            .delete(url,{headers:this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    update(diary:Diary):Promise<Diary>{
        const url = `${this.Url}${diary.id}/`;
        return this.http.put<Diary>(url,diary,{headers:this.headers})
            .toPromise()
            .then(response => {
                if (!response) {
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

