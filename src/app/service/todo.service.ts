import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

const key: string = "todos";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  constructor() {
    const storedTodos = localStorage.getItem(key)
    // JSON.parse();
    console.log("storedTodos",storedTodos);
    if (storedTodos == null || storedTodos.length === 0)
    {
      localStorage.setItem(key,JSON.stringify(this.todos));
    }
    else{
      this.todos = JSON.parse(storedTodos);
    }
    // this.todos = [
    //   new Todo("Taste JavaScript"),
    //   new Todo("Buy a unicorn"),
    // ];
  }
  remove(todo: any) {
    const index = this.todos.indexOf(todo);
    if (index != -1){
      this.todos.splice(index,1);
    }
    this.updateLocalStorage();
  }
  addTodo(title: string) {
    this.todos.push(new Todo(title));
    this.updateLocalStorage();
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  updateLocalStorage(){
    localStorage.setItem(key, JSON.stringify(this.todos));
  }

}
