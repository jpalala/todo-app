import { Injectable } from '@angular/core';
import { Todo  } from '../model/todo';
// TODO: //import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodomockService {
  private todos: Array<object>;

  constructor(private http: HttpClient) {
    this.initTodos();
  }

  initTodos() {
    this.getTodos();
  }

  // WIP: Convert to Observables
  getTodos(): Observable< Array<Todo> >   {
    this.todos = []; // Array<Object>;
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');

    return this.http.get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5', {headers})
      .pipe(
        map((data: any) => {
          // this.todos.push(new Todo( data.id, data.title, data.completed ));
          return data;
        }), catchError( () => {
          return throwError( 'No not found!' );
        })
      // tslint:disable-next-line: semicolon
      )
  }

}
