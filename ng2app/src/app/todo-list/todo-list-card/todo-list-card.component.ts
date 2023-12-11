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
    public modalService: NgbModal
    ){}

    ngOnInit(): void {
      this.todoService.getAllTodo()
        .then(todos => this.todos = todos);
    }

    save(): void {
      if (this.operationType === 'create') {
        this.todoService.create(this.todo)
          .then(data => {
            this.getNewTodo();
            this.modalService.dismissAll(); // モーダルを閉じる
          });
      } else if (this.operationType === 'edit') {
        this.todoService.update(this.todo)
          .then(updated => {
            this.modalService.dismissAll(); // モーダルを閉じる
          });
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

  async delete(todo: Todo): Promise<void> {
    try {
      await this.todoService.delete(todo.id); // 削除を待つ
      this.todos = this.todos.filter(t => t.id !== todo.id); // 削除されたToDoを配列から除外
    
      this.modalService.dismissAll(); // モーダルを閉じる
    } catch (error) {
      console.error('Error deleting todo', error);
    }
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
