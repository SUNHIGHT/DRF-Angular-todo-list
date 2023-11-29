// TodoListComponent
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from './todo.model';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newtodos: Todo[] = []; 
  todo: Todo = new Todo(); 

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAllTodo()
      .then(todos => this.todos = todos);
  }

  save(): void {
    this.todoService
      .create(this.todo)
      .then(todo => {
        this.newtodos.unshift(todo);
        this.todo = new Todo();
      });
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
}