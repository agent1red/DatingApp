import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // create object for username/password names model - type is any
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  // method to login

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in Successfully');
    }, error => {
      console.log(error);
    });
  }

  // login method if token returns true
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token; // this returns a true or false using !!
  }

  // method to logout - this removes the token from local storage
  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }


}
