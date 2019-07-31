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
      console.log('Failed to log in');
    });
  }

}
