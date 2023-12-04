import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';
import { AppRoutingModule } from './app-routing.module'; // AppRoutingModule のインポート

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    // 他のコンポーネント
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule ,
    AppRoutingModule, // AppRoutingModule を追加
    // 他の必要なモジュール
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule { }