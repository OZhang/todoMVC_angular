import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  newTodo(newItem){
    this.todoService.addTodo(newItem.value);
    newItem.value = "";
  }
}
