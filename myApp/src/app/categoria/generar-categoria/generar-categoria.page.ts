import { Component, OnInit } from '@angular/core';

import {CategoriaService} from '../../services/categoria.service';

@Component({
  selector: 'app-generar-categoria',
  templateUrl: './generar-categoria.page.html',
  styleUrls: ['./generar-categoria.page.scss'],
})
export class GenerarCategoriaPage implements OnInit {
  formulariocategoria={
  name: '',
  description: '',
  createdBy: ''
  }
  
  categorias: any={};

  constructor(public categoriaservice:CategoriaService) { }

  ngOnInit() {
  
  }
  postCategorias(){
    const Categoria={
    name: this.formulariocategoria.name,
    description:this.formulariocategoria.description,
    createdBy: this.formulariocategoria.createdBy
    };
    
    this.categoriaservice.postCategorias(Categoria).subscribe(
      (newTask)=>{console.log(newTask);}
    );
    }
}
