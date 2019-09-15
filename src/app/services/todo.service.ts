import { Injectable } from '@angular/core';
import { Todo  } from '../model/todo';
// TODO: //import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  todos: Array<Todo>;

  constructor(private http: HttpClient) {
    this.initTodos();
  }

  // TODO: Convert to Observables
  getTodos(): Array<Todo> {
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

