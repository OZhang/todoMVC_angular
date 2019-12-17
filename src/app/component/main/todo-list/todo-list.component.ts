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
    console.log("TodoListComponent.ngOnInit");
    this.todoService.todoList.subscribe((t) => {
      this.todos = t;
      console.log("this.todoService.getTodos()", this.todos.length);
    });
  }

  remove(todo): void {
    this.todoService.remove(todo);
  }

  editTodo(todo): void {
    console.log("editTodo")
  }
}
