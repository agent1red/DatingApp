import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // create object for username/password names model - type is any
  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  // method to login

  login() {
    console.log(this.model);
  }

}
