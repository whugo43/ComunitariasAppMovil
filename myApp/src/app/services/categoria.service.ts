import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) {
   console.log("categorias de donaciones");
   }
   getCategorias(){
     return this.http.get('http://127.0.0.1:8000/api/category/');
   }
   addCategorias(){

  }
}
