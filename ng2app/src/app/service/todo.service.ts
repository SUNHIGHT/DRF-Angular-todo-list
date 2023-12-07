import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../todo-list/todo.model';

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

  getAllTodosSorted(sortBy: string): Promise<Todo[]> {
    const url = `${this.Url}?sort_by=${sortBy}`;
    return this.http.get<Todo[]>(url)
      .toPromise()
      .then(response => response as Todo[])
      .catch(this.handleError);
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
    
    // 削除時の挙動
  delete(id: number): Promise<void> {
    const url = `${this.Url}${id}/`;
    return this.http
      .delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // 更新時の挙動
  update(todo: Todo): Promise<Todo> {
    const url = `${this.Url}${todo.id}/`;
    return this.http.put<Todo>(url, todo, { headers: this.headers })
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