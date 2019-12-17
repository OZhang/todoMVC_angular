import { Component, OnInit, AfterViewChecked, AfterViewInit, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements AfterContentInit {

  public todos: Todo[];
  constructor(private todoService: TodoService,private cdref: ChangeDetectorRef) {
  }

  ngAfterContentInit(): void {
    this.cdref.detectChanges();
    this.todoService.CurrentStatus.subscribe(s => {
      this.getTodos(s);
    });
  }

  getTodos(status: string){
    if (status === "completed") {
      this.todoService.todoList.pipe(map(t => t)).subscribe(t => { this.todos = t.filter(todo => todo.isCompleted) });
    }
    else if (status === "active") {
      this.todoService.todoList.pipe(map(t => t)).subscribe(t => { this.todos = t.filter(todo => !todo.isCompleted) });
    }
    else {
      this.todoService.todoList.pipe(map(t => t)).subscribe(t => { this.todos = t});
    }
  }

  remove(todo): void {
    this.todoService.remove(todo.id);
  }

  editTodo(todo): void {
    console.log("editTodo")
  }

  checkchanged(){
    this.todoService.checkchanged();
  }
}
