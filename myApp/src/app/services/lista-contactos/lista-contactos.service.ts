import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class ListaContactosService {
  private api=Api.api+'provider-contact/';
  private headers:any={headers: {token: localStorage.getItem('token'),body:'body'}};


  constructor(private http: HttpClient) { 

  }

  getContactos(){
    const path= this.api;
    return this.http.get(path,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }

  getContactosId(id: string){ 
    return this.http.get<any>(this.api+id,{headers: {token: localStorage.getItem('token'),body:'body'}});

  }

  postContactos(contacto){
    const path= this.api;
    return this.http.post(path,contacto,{headers: {token: localStorage.getItem('token'),body:'body'}})

  }

  updateContactos(contacto,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,contacto,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }
  
  deleteContactos(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }
  
}
