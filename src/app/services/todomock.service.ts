import { Injectable } from '@angular/core';
import { Todo  } from '../model/todo';
// TODO: //import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodomockService {
  todos: Array<Todo>;

  constructor(private http: HttpClient) {
    this.initTodos();
  }

  // TODO: Convert to Observables
  getTodos(): Array<Todo> {
    if ( this.todos.length === 0 ) {
      this.initTodos();
    }
    return this.todos;
  }

  initTodos() {
    this.http.get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((data: any) => {
        let i = 1;
        data.forEach( (todo: {id: number, title: string; completed: boolean; }) => {
          this.todos.push(new Todo( i++, todo.title, todo.completed ));
        });
    });
  }
}

