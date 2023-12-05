// TodoListComponent
import { Component, OnInit,Input  } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Todo } from './todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newtodos: Todo[] = []; //追記
  @Input() todo: Todo = new Todo(); //追記

  constructor(
    private todoService: TodoService,
  ){}
  ngOnInit(): void {
    this.todoService.getAllTodo()
      .then(todos => this.todos = todos);
  }


   // 保存ボタンを押した時の挙動
   save(): void {
    this.todoService
      .create(this.todo)
      .then(data => {this.getNewTodo()});
    this.todo = new Todo();
  }

  // 最新の一件を呼び出す挙動
  getNewTodo(): void {
    this.todoService
      .getNewTodo()
      .then(res => {this.pushData(res)});
  }

  // htmlに渡すnewtodosにデータをpushする
  pushData(data: Todo): void {
    this.newtodos.unshift(data);
  }

  // 削除ボタンを押した時の挙動
  delete(id: number): void {
    this.todoService
      .delete(id).then(() =>{
        this.todos = this.todos.filter(todo => todo.id !== id);
      }).catch(error => {
        console.error('Error deleting todo',error);
      })
  }

  update(id: number): void {
    let updatedTodo = new Todo();
    updatedTodo.id = id;

    this.todoService.update(updatedTodo).then(updated => {
      // todos 配列を更新する
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos[index] = updated;
      }
    }).catch(error => {
      console.error('Error updating todo', error);
    });
  }
  
  
  
}