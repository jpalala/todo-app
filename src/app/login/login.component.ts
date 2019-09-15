import { Component, OnInit } from '@angular/core';
import { User } from '../User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;

  constructor() { }

  ngOnInit() {

  }

  handleSubmit() {
    this.submitted = true;
    const user = new User('test');
    localStorage.setItem('username', user.name);
  }

  saveLogin() {

  }
}
