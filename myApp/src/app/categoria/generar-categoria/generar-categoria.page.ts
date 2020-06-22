import { Component, OnInit } from '@angular/core';

import {CategoriaService} from '../../services/categoria/categoria.service';

@Component({
  selector: 'app-generar-categoria',
  templateUrl: './generar-categoria.page.html',
  styleUrls: ['./generar-categoria.page.scss'],
})
export class GenerarCategoriaPage implements OnInit {
  formularios={
  name: '',
  description: ''
  }
  
  categorias: any={};

  constructor(public categoriaservice:CategoriaService) { }

  ngOnInit() {
  
  }
  postCategorias(){
    const Categoria={
    name: this.formularios.name,
    description:this.formularios.description,
    createdBy: 'Hugo Wong'
    };
    
    this.categoriaservice.postCategorias(Categoria).subscribe(
      (newTask)=>{console.log(newTask);}
    );
    }
}
