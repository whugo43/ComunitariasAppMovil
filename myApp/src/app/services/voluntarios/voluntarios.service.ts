import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Voluntario } from '../../clases/voluntario/voluntario'
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {
  private api=Api.api+'volunteer/';
  private headers:any={headers: {token: localStorage.getItem('token'),body:"body"}};

  constructor(private http:HttpClient) { }

  getVoluntarios() {
    const path = this.api;
    return this.http.get<Voluntario[]>(this.api,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }
  getApi() {
    return this.api;
  }

  postVoluntario(Grupo) {
    const path= this.api;
    return this.http.post(path,Grupo,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }

  getVoluntarioId(id: string){ 
    return this.http.get<any>(this.api+id,{headers: {token: localStorage.getItem('token'),body:'body'}});
  }

  deletevoluntario(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }

  updateVoluntario(voluntario,id:string){
    const path= this.api+id+'/';
    return this.http.patch(path,voluntario,{headers: {token: localStorage.getItem('token'),body:'body'}});
  }
}
