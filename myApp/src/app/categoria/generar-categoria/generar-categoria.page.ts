import { Component, OnInit } from '@angular/core';

import {CategoriaService} from '../../services/categoria.service';

@Component({
  selector: 'app-generar-categoria',
  templateUrl: './generar-categoria.page.html',
  styleUrls: ['./generar-categoria.page.scss'],
})
export class GenerarCategoriaPage implements OnInit {
  categorias: any={};

  constructor(public categoriaservice:CategoriaService) { }

  ngOnInit() {
  
  }
  postCategorias(){
    const Categoria={
      name: 'Prueba 1',
    description: 'prueba 1.1.1',
    createdBy: 'Wong hugo Prueba1'
    };
    this.categoriaservice.postCategorias(Categoria)
    .subscribe(
      (newTask)=>{console.log(newTask)}
    );
    }
    
}
