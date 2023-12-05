import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { DashboardComponent } from '../dashboard/dashboard.component'; // 修正

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // 修正

  { path: 'dashboard', component: DashboardComponent }, // 修正
  { path: 'todos', component: TodoListComponent }

  // 他のルートを必要に応じてここに追加
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }