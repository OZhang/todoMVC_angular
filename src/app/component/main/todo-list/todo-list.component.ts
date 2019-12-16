import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    console.log(" this.todos= ", this.todos);
  }

  remove(todo): void{
    console.log(todo);
    this.todoService.remove(todo);
  }

  editTodo(todo): void {
    console.log("editTodo")
  }
}
