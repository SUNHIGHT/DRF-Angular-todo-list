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

  create(todo: Todo): Promise<Todo> {
    return this.http
      .post<Todo>(this.Url, todo, {headers: this.headers})
      .toPromise()
      .then(response => {
        // レスポンスが Todo オブジェクトであることを確認
        if (response instanceof Todo) {
          return response;
        } else {
          // レスポンスが Todo オブジェクトでない場合の処理
          throw new Error('Invalid response type');
        }
      })
      .catch(this.handleError);
  }

  // 最新のTodoを取得する
  getNewTodo(): Promise<Todo> {
    return this.http
      .get<Todo[]>(this.Url + "?limit=1")
      .toPromise()
      .then(response => {
        // response が undefined または 空配列の場合、新しい Todo インスタンスを返す
        if (!response || response.length === 0) {
          return new Todo();
        }
        return response[0];
      });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // 開発用途のログ
    return Promise.reject(error.message || error);
  }
}