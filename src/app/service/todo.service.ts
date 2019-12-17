import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

const key: string = "todos";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private isCheckedAll: boolean = false;
  private todos: Todo[];
  public todoList: Subject<Todo[]>;
  public CurrentStatus: Subject<string>;

  constructor() {
    const storedTodos = localStorage.getItem(key)
    if (storedTodos == null || storedTodos.length === 0) {
      this.todos = [];
      localStorage.setItem(key, JSON.stringify(this.todos));
      console.log("this.todos", this.todos);
    }
    else {
      this.todos = JSON.parse(storedTodos);
      console.log("this.todos", this.todos);
    }

    this.todoList = new BehaviorSubject<Todo[]>(this.todos);
    this.todoList.subscribe(t => this.updateLocalStorage(t));
    this.CurrentStatus = new BehaviorSubject<string>("");
  }

  remove(id: string) {
    const todo = this.todos.filter(t => t.id === id);
    if (todo && todo.length === 1) {
      const index = this.todos.indexOf(todo[0]);
      this.todos.splice(index, 1);
      this.todoList.next(this.todos);
    }
  }

  addTodo(title: any) {
    if (title.trim().length === 0)
      return;
    if (this.todos.filter(t => t.title.trim() === title.trim()).length > 0) {
      return;
    }
    this.todos.push(new Todo(title.trim()));
    this.todoList.next(this.todos);
  }

  updateLocalStorage(t: Todo[]) {
    localStorage.setItem(key, JSON.stringify(t));
  }

  setCurrentStatus(currentStatus: string) {
    this.CurrentStatus.next(currentStatus);
  }

  update() {
    this.todoList.next(this.todos);
  }

  countleft(): number {
    return this.todos.filter(todo => !todo.isCompleted).length;
  }

  countcompleted(): number {
    return this.todos.filter(todo => todo.isCompleted).length;
  }

  checkchanged() {
    this.isCheckedAll = !this.isCheckedAll;
    this.todos.forEach(t => t.isCompleted = this.isCheckedAll);
    this.todoList.next(this.todos);
  }

  clearCompleted() {
    var completedTodos = this.todos.filter(t=> t.isCompleted);
    var ids: string[] = [];
    completedTodos.forEach(t => ids.push(t.id));
    ids.forEach(i => this.remove(i));
  }
}
