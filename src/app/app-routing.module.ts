import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LoginComponent } from './login/login.component';

/* import { MainNavComponent } from './main-nav/main-nav.component';*/

const routes = [
  { path: '', component: TodoListComponent },
  { path: 'login', component: LoginComponent }


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
