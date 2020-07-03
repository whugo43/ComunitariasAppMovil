import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import {Categoria} from '../../interfaces/categoria';
import { $$ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private api='http://127.0.0.1:8000/api/category/';
  constructor(private http:HttpClient) {
   console.log("categorias de donaciones");
  }
  
  getCategorias(){
    const path= this.api;
    return this.http.get<Categoria[]>(path)
  }

  getCategoriaId(id: string){ 
    return this.http.get<any>(this.api+id);

  }
  
  postCategorias(categoria){
    const path= this.api;
    return this.http.post(path,categoria)
  }

  updateCategorias(categoria,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,categoria)
  }
  
  deleteCategorias(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path)
  }

  updateCategoria0(id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,
    {
      state:'0'
    })

  }  

}
