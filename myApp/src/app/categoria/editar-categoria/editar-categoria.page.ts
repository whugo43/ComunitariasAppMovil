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
  formulariocategoria={
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
    console.log(this.id)
    console.log(this.formulariocategoria.name)
    console.log(this.formulariocategoria.description)
    console.log(this.formulariocategoria.createdBy)

    const Categorias={
      id: this.id,
      name: 'prueba update 1',
      description: 'prueba update 1.1.1',
      state:'1',
      createdAt: '2020-05-04T02:14:09.246686Z',
      createdBy: 'Wong hugo Prueba1'
    }

    let categoria:Categoria ={
      id: this.id,
      name: 'prueba update 1',
      description: 'prueba update 1.1.1',
      state:'1',
      createdAt: '2020-05-04T02:14:09.246686Z',
      createdBy: 'Wong hugo Prueba1'
    };
    this.categoriaservice.updateCategorias(categoria,this.id)
    .subscribe(
      success => alert("Done"),
       error => alert(error)
    );
    
  }

}

