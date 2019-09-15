import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo';
import { TodomockService } from '../services/todomock.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo>;
 // todomockService: <Object>;

  constructor(private todomockService: TodomockService) {
    this.todomockService = todomockService;

  }

  ngOnInit() {
    this.todomockService.initTodos();

    console.log(this.todos);
   }

   getTodos() {
     this.todomockService.getTodos();
   }
}
