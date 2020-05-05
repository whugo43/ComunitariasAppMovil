import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import {Categoria} from '../interfaces/categoria';
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
    const path=  `${this.api}${id} `;
    return this.http.get<Categoria>(path)

  }
  
  postCategorias(categoria:Categoria){
    const path= this.api;
    return this.http.post(path,categoria)


  }

  updateCategorias(categoria:Categoria){
    const path= `${this.api}${categoria.id}`;
    return this.http.put<Categoria>(path,categoria)
  }
  
  deleteCategorias(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path)
  }

}
