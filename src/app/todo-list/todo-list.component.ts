import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo';
import { TodomockService } from '../services/todomock.service';
import { map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo>;
 // todomockService: <Object>;

  constructor(private todomockService: TodomockService) {
  }

  ngOnInit() {
    const todos = this.getTodos();
    // todos.map((todo) => { console.log(todo.id)});
    return todos;
   }

   getTodos() {
     // tslint:disable-next-line: deprecation
     return this.todomockService.getTodos().subscribe((data: any) => {
        data.forEach(todo => {
          this.todos.push(new Todo( todo.id, todo.title, todo.completed ));
      });// end foreach
   });// end subscribe
  }
}
