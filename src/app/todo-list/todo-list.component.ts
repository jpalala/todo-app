import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo';
import { TodomockService } from '../services/todomock.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<object>;

  constructor(private todomockService: TodomockService) {
    this.todomockService = todomockService;
  }

  ngOnInit() {
    this.todos = this.todomockService.getTodos();
  }
}
