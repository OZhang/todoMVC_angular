import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() public Todo: Todo;
  @Output() removeTodo: EventEmitter<Todo> = new EventEmitter();
  public isediting: boolean;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  remove(): void {
    this.removeTodo.emit(this.Todo);
  }

  editTodo() {
    this.isediting = !this.isediting;
  }
  saveedited(editedtodo): void {
    this.Todo.title = editedtodo.value;
    this.isediting = false;
    this.update();
  }

  cancelEditing() {
    this.isediting = false;
  }
  stopEditing(editedtodo) {
    this.isediting = false;
    if (editedtodo.value.length === 0) {
      this.removeTodo.emit(this.Todo);
    }else{
      this.saveedited(editedtodo);
    }
  }

  update(){
    this.todoService.update();
  }
}
