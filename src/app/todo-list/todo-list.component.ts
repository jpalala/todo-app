import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<object>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.initTodos();
  }

  initTodos() {
    this.todos = [];
    this.http.get('https://jsonplaceholder.typicode.com/todos')
    .subscribe((data: any) => {
      let i = 1;
      data.forEach( (todo: {id: number, title: string; completed: boolean; }) => {
        this.todos.push(new Todo( i++, todo.title, todo.completed ));
      });
    });
  }
}
