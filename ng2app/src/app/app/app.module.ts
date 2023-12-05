import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoService } from '../service/todo.service';
import { AppRoutingModule } from './app-routing.module'; 
import { GlobalTabComponent } from '../global-tab/global-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule ,
    GlobalTabComponent,
    AppRoutingModule, // AppRoutingModule を追加
    // 他の必要なモジュール
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule { }