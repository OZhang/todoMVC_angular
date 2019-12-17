import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

const key: string = "todos";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  public todoList: Subject<Todo[]>;
  constructor() {
    const storedTodos = localStorage.getItem(key)
    console.log("storedTodos", storedTodos);
    if (storedTodos == null || storedTodos.length === 0) {
      localStorage.setItem(key, JSON.stringify(this.todos));
      console.log("this.todos", this.todos);
    }
    else {
      this.todos = JSON.parse(storedTodos);
      console.log("this.todos", this.todos);
    }

    this.todoList = new BehaviorSubject<Todo[]>(this.todos);
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index != -1) {
      this.todos.splice(index, 1);
    }
    this.todoList.next(this.todos);
    this.updateLocalStorage();
  }
  addTodo(title: string) {
    this.todos.push(new Todo(title));
    this.todoList.next(this.todos);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem(key, JSON.stringify(this.todos));
  }
  countleft(): number {
    return this.todos.filter(todo => !todo.isCompleted).length;
  }
}
