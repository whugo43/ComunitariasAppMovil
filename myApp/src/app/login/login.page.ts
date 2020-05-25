import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../services/categoria/categoria.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  categorias;

  constructor( public categoriaservice: CategoriaService,) { }

  ngOnInit() {  
    this.categoriaservice.getCategorias()
    .subscribe(
      (data)=>{this.categorias=data},
      (error)=>{console.log(error)}
      );
  }

}
