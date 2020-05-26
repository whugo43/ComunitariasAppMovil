import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Logins 
  formularios={
    Username: '',
    Password: '',
    }

  constructor( public loginService: LoginService) { }

  ngOnInit() {  
  }

  validarlogin(){
    
    const log={
    username: this.formularios.Username,
    password:this.formularios.Password
    };
    console.log(log)
    
    let Login

    this.loginService.getLogins()
    .subscribe(
      (data)=>{Login=data},
      (error)=>{console.log(error);}
    );

    console.log(Login)

  }

}
