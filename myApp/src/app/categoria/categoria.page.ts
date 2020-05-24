import { Component, OnInit } from '@angular/core';
import {CategoriaService} from '../services/categoria/categoria.service';

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
      );
     
    
  }
  
    deleteCategoria(id: string){
      this.categoriaservice.deleteCategorias(id).
      subscribe(
        (data)=>{console.log(data)},
        (error)=>{console.log(error);}
        );   
      this.ngOnInit();      
    }

    deleteUpdateCategoria(id: string){
      this.categoriaservice.updateCategoria0(id).
      subscribe(
        (data)=>{console.log(data)},
        (error)=>{console.log(error);}
        );
        this.ngOnInit();
             
    }

    doRefresh(event) {
      setTimeout(() => {
        this.ngOnInit();
        event.target.complete();   
      }, 200);
    }
  
}
