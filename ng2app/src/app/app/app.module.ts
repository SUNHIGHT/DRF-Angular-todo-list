// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoListCardComponent } from '../todo-list/todo-list-card/todo-list-card.component';
import { TodoService } from '../service/todo.service';
import { AppRoutingModule } from './app-routing.module'; 
import { GlobalTabComponent } from '../global-tab/global-tab.component';
import { DashboardComponent } from '../dashboard/dashboard.component'; // 修正

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    GlobalTabComponent,
    TodoListCardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule, // AppRoutingModule を追加
    // 他の必要なモジュール
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule { }