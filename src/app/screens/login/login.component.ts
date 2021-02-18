import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService,private router : Router) { }

  username : string;
  password : string;

  ngOnInit(): void {
  }

  loginClicked(){
    // if(this.loginService.getUser(this.username).password == this.password)
    this.router.navigateByUrl("/desktop");
  }
}
