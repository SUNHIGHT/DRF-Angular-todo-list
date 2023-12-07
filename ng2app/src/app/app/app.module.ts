// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoListCardComponent } from '../todo-list/todo-list-card/todo-list-card.component';
import { QuoteComponent } from '../quote/quote.component';
import { TodoService } from '../service/todo.service';
import { AppRoutingModule } from './app-routing.module'; 
import { GlobalTabComponent } from '../global-tab/global-tab.component';
import { DashboardComponent } from '../dashboard/dashboard.component'; // 修正
import { QuoteService } from '../service/quote.service';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { 
	IgxCalendarModule,
	IgxDialogModule
 } from "igniteui-angular";
import { CalenderComponent } from "../todo-list/calender/calender.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    GlobalTabComponent,
    QuoteComponent,
    TodoListCardComponent,
    DashboardComponent,
    CalenderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    BrowserAnimationsModule, 
    HammerModule, 
    IgxCalendarModule,
    NgbModule,
    HttpClientModule,
    BrowserModule,
	  IgxDialogModule,
    AppRoutingModule, 
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [TodoService,QuoteService],
  bootstrap: [AppComponent],
})
export class AppModule { }