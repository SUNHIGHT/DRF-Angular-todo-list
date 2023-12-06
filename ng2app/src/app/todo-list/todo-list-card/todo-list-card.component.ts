import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../service/todo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list-card',
  templateUrl: './todo-list-card.component.html',
  styleUrl: './todo-list-card.component.css'
})
export class TodoListCardComponent {
  todos: Todo[] = [];
  newtodos: Todo[] = []; //追記
  todo: Todo = new Todo(); 
  operationType: 'create' | 'edit' | 'delete' = 'create';

  constructor(
    private todoService: TodoService,
    private modalService: NgbModal
    ){}

    ngOnInit(): void {
      this.todoService.getAllTodo()
        .then(todos => this.todos = todos);
    }

  save(): void {
    if (this.operationType === 'create') {
      this.todoService
      .create(this.todo)
      .then(data => {this.getNewTodo()});
    this.todo = new Todo();
    } else if (this.operationType === 'edit') {
     
    }
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
