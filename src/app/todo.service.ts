import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo  } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos() {
   const URL = 'https://jsonplaceholder.typicode.com/todos';

    this.http.get(URL)
    .subscribe((data: any) => {
      //let i = 1;
      data.forEach( (todo: {id: number, title: string; completed: boolean; }) => {
        this.todos.push(new Todo( todo.id, todo.title, todo.completed ));
      });
      return this.todos;
    });
  }
}
