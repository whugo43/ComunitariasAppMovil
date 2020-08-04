import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import {Categoria} from '../../interfaces/categoria';
import { $$ } from 'protractor';
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private api=Api.api+'category/';
  private headers:any={headers: {token: localStorage.getItem('token'),body:'body'}};

  constructor(private http:HttpClient) {
   console.log("categorias de donaciones");
  }
  
  getCategorias(){
    const path= this.api;
    return this.http.get<Categoria[]>(path,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }

  getCategoriaId(id: string){ 
    return this.http.get<any>(this.api+id,{headers: {token: localStorage.getItem('token'),body:'body'}});

  }
  
  postCategorias(categoria){
    const path= this.api;
    return this.http.post(path,categoria,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }

  updateCategorias(categoria,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,categoria,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }
  
  deleteCategorias(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }

  updateCategoria0(id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,{headers: {token: localStorage.getItem('token'),body:'body'}})

  }  

}
