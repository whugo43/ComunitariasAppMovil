import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import {Categoria} from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private api='http://127.0.0.1:8000/api/category/';
    constructor(private http:HttpClient) {
   console.log("categorias de donaciones");
  }
  getCategorias(){
     return this.http.get<Categoria[]>(this.api)
  }
  
  postCategorias(){
  }

  updateCategorias(){
    
  }
  
  deleteCategorias(){

  }

}
