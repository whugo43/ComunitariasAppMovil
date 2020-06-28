import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Voluntario } from '../../clases/voluntario/voluntario'

@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {
  private api='http://localhost:8000/api/volunteer/';
  constructor(private http:HttpClient) { }

  getVoluntarios() {
    const path = this.api;
    return this.http.get<Voluntario[]>(this.api)
  }
  getApi() {
    return this.api;
  }

  postVoluntario(Grupo) {
    const path= this.api;
    return this.http.post(path,Grupo)
  }

  getVoluntarioId(id: string){ 
    return this.http.get<any>(this.api+id);
  }

  deletevoluntario(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path)
  }

  updateVoluntario(voluntario,id:string){
    const path= this.api+id+'/';
    return this.http.patch(path,voluntario);
  }
}
