import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	username="";
	password="";

  constructor(private router: Router) { }

  ngOnInit() {}

  dologin(){
  	if(this.username==this.password){
    this.router.navigate('/home');
  	}
  }

}
