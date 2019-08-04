import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // create object for username/password names model - type is any
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  // method to login

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in Successfully');
    }, error => {
      this.alertify.error(error);
    });
  }

  // login method if token returns true
  loggedIn() {
    return this.authService.loggedIn();
  }

  // method to logout - this removes the token from local storage
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }


}
