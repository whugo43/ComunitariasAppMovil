import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
categorias
  constructor(public categoriaservice:CategoriaService) {

   }

  ngOnInit() {
    this.categoriaservice.getCategorias()
    .subscribe(
      (data)=>{this.categorias=data},
      (error)=>{console.log(error);}
      )

    
    
  }

}
