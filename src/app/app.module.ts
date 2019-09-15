import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { AppRoutingModule } from './app-routing.module';
mport { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    HeaderComponent
  ],
  imports: [
    HeaderModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
