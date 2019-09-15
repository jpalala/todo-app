import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes = [
  { path: '', component: WeatherComponent },
  { path: 'todos', component: TodoListComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
