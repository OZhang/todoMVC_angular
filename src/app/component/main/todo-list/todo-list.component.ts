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
    this.todoService.getTodos().subscribe((t) => {
      this.todos = t;
    });



    // .subscribe({
    //   next(todos) {

    //   },
    //   complete() {console.log("complete")}
    // })

    // this.todoService.getTodos().subscribe({
    //   next(todos) {console.log("Todo[]",todos)},
    //   completed(todos){
    //   this.todos = todos as Todo[]}
    // });
    // console.log(" this.todos= ", this.todos);
  }

  remove(todo): void {
    console.log(todo);
    this.todoService.remove(todo);
  }

  editTodo(todo): void {
    console.log("editTodo")
  }
}
