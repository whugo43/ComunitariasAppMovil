import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {CategoriaService} from '../../services/categoria.service';
import {Categoria} from '../../interfaces/categoria';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.page.html',
  styleUrls: ['./editar-categoria.page.scss'],
})
export class EditarCategoriaPage implements OnInit {
  formularios={
    name: '',
    description: '',
    createdBy: ''
    };
    categoria=[];
    id: string;
  constructor(private activateRoute: ActivatedRoute,public categoriaservice:CategoriaService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const categoriaId = paramMap.get('categoriaId')
      this.id = categoriaId
      this.categoriaservice.getCategoriaId(categoriaId)
      .subscribe(
      (data)=>{this.categoria=data},
      (error)=>{console.log(error);}
      )
    });
  }

  upDatetCategorias(){

    let categoria ={
      id: this.id,
      name: this.formularios.name,
      description:this.formularios.description
    };
    this.categoriaservice.updateCategorias(categoria,this.id)
    .subscribe(
      success => console.log('done'),
       error => console.log(error)
    );
    
  }

}

