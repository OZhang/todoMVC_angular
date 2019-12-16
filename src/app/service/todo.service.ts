import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { Observable } from 'rxjs';

const key: string = "todos";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Observable<Todo[]> = new Observable<Todo[]>();

  constructor() {
  }
  remove(todo: any) {
    // const index = this.todos.subscribe({
    //   next(n) { console.log(n)},
    //   complete() {console.log('Finished')}
    // });
    
    
    
    // ({t => tindexOf(todo)});
    // if (index != -1){
    //   this.todos.splice(index,1);
    // }
    // this.updateLocalStorage();
  }
  addTodo(title: string) {
    // this.todos.push(new Todo(title));
    // this.updateLocalStorage();
  }
  getTodos(): Observable<Todo[]> {
    const storedTodos = localStorage.getItem(key)
    // JSON.parse();
    // console.log("storedTodos",storedTodos);
    if (storedTodos == null || storedTodos.length === 0)
    {
      const todos: Todo[] = [];
      localStorage.setItem(key,JSON.stringify(this.todos));
      return Observable.create(todos);
    }
    else{
      const todos = JSON.parse(storedTodos);
      // console.log("todos",todos);
      const returnValue = Observable.create(todos);
      // console.log("returnValue",returnValue);
      return returnValue;
    }
    // this.todos = [
    //   new Todo("Taste JavaScript"),
    //   new Todo("Buy a unicorn"),
    // ];

  }
  updateLocalStorage(){
    localStorage.setItem(key, JSON.stringify(this.todos));
  }
  countleft(): number {
    return 0;// this.todos.filter(todo => !todo.isCompleted).length;
  }

}
