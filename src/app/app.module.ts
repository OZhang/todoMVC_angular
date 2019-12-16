import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTodoComponent } from './component/new-todo/new-todo.component';
import { MainComponent } from './component/main/main.component';
import { TodoListComponent } from './component/main/todo-list/todo-list.component';
import { TodoItemComponent } from './component/main/todo-item/todo-item.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTodoComponent,
    MainComponent,
    TodoListComponent,
    TodoItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
