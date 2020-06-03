import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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

  constructor(public loginService: LoginService,
              public router: Router) { }

  ngOnInit() {  
  }

  validarlogin(form):void{
    
    const log={
    username: this.formularios.Username,
    password:this.formularios.Password
    };
  

    this.loginService.login(form.value)
    .subscribe(
      res=>{this.router.navigateByUrl('/home');}
     // (data)=>{this.Logins=data},
     // (error)=>{console.log(error);}
    );

    console.log(form.value)

  }

}
