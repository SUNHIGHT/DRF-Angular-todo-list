// TodoListComponent
import { Component, OnInit,Input  } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Todo } from './todo.model';
import { TodoListCardComponent } from './todo-list-card/todo-list-card.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newtodos: Todo[] = []; 
  selectedSortOption: string = ''; 
  viewDate: Date = new Date();  // 今日の日付
  events: any[] = [];  // カレンダーイベント
  @Input() todo: Todo = new Todo(); //追記

  constructor(
    private todoService: TodoService,
    //モーダル用にNgbModalを追加
    private modalService: NgbModal
  ){}

  ngOnInit(): void {
    this.todoService.getAllTodo()
      .then(todos => this.todos = todos);
  }

  sortTodos(event: Event): void {
    // HTMLSelectElement に型アサーションを適用
    const selectElement = event.target as HTMLSelectElement;
    const sortValue = selectElement.value;
  
    this.todoService.getAllTodosSorted(sortValue)
      .then(sortedTodos => this.todos = sortedTodos)
      .catch(error => console.error('Error fetching sorted todos:', error));
  }

  openCreateModal() {
    const modalRef = this.modalService.open(TodoListCardComponent);
    modalRef.componentInstance.operationType = 'create';
    modalRef.componentInstance.todo = new Todo();
  }
  
  openEditModal(todo: Todo) {
    const modalRef = this.modalService.open(TodoListCardComponent);
    modalRef.componentInstance.operationType = 'edit';
    modalRef.componentInstance.todo = todo;
  }
  
  openDeleteModal(todo: Todo) {
    const modalRef = this.modalService.open(TodoListCardComponent);
    modalRef.componentInstance.operationType = 'delete';
    modalRef.componentInstance.todo = todo;
  }

  
}