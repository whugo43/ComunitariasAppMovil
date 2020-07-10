import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class ListaContactosService {
  private api=Api.api+'provider-contact/';

  constructor(private http: HttpClient) { 

  }

  getContactos(){
    const path= this.api;
    return this.http.get(path)
  }

  getContactosId(id: string){ 
    return this.http.get<any>(this.api+id);

  }

  postContactos(contacto){
    const path= this.api;
    return this.http.post(path,contacto)

  }

  updateContactos(contacto,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,contacto)
  }
  
  deleteContactos(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path)
  }
}