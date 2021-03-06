import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './component/main/todo-list/todo-list.component';


const routes: Routes = [
  { path: '', component: TodoListComponent, pathMatch: 'full' },
  { path: ':status', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
