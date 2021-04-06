import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [
  ]
})
export class AuthComponent implements OnInit {
  isLoginMode = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    //switchs from true to false to true to false whenever called
    this.isLoginMode = !this.isLoginMode;
  }

}
