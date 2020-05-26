import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../services/categoria/categoria.service';

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

  constructor( public categoriaservice: CategoriaService,) { }

  ngOnInit() {  
  }

  postCategorias(){
    const Categoria={
    name: this.formularios.Username,
    description:this.formularios.Password
    };
  }

}
