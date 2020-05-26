import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularios={
    Username: '',
    Password: '',
    }

  constructor( public loginService: LoginService) { }

  ngOnInit() {  
  }

  validarlogin(){
    const Categoria={
    name: this.formularios.Username,
    description:this.formularios.Password
    };
    console.log(Categoria)

  }

}
