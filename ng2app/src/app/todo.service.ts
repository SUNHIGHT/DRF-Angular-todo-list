import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from './todo-list/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private Url = 'http://127.0.0.1:8000/api/to_do/';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  // 全てのtodoをGETする
  getAllTodo(): Promise<Todo[]> {
    return this.http
      .get<Todo[]>(this.Url)
      .toPromise()
      .then(response => response as Todo[]);
  }

    // 追加時の挙動
    create(todo: Todo): Promise<Todo> {
      return this.http
        .post<Todo>(this.Url, todo, {headers: this.headers})
        .toPromise()
        .then(response => {
          if (!response) {
            throw new Error('No response from server');
          }
          return response;
        })
        .catch(this.handleError);
    }
    
    
    getNewTodo(): Promise<Todo> {
      return this.http
        .get<Todo[]>(this.Url + "?limit=1")
        .toPromise()
        .then(response => {
          if (!response || response.length === 0) {
            throw new Error('No new todos found');
          }
          return response[0];
        })
        .catch(this.handleError);
    }
    
    
  

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // 開発用途のログ
    return Promise.reject(error.message || error);
  }
}