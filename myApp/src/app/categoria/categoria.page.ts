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

  updateCategorias(){
    const Categoria={
      id: '1',
      name: 'prueba update 1',
      description: 'prueba update 1.1.1',
      state:'1',
      createdAt: '2020-05-04T02:14:09.246686Z',
      createdBy: 'Wong hugo Prueba1'
    };
    this.categoriaservice.updateCategorias(Categoria)
    .subscribe(
      todo=>{console.log(todo)}
    );
    }
  
    deleteCategoria(){
      this.categoriaservice.deleteCategorias('7').
      subscribe(
        (data)=>{console.log(data)},
        (error)=>{console.log(error);}
        )  
    }
  
}
