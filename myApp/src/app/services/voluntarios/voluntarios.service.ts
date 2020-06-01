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

  guardarVoluntario(Grupo) {
    const path= this.api;
    return this.http.post(path,Grupo)
  }

  getVoluntarioId(id: string){ 
    return this.http.get<any>(this.api+id);
  }

  deletevoluntario(id: string){
    const path=`${this.api}${id}`;
    console.log(path);
    return this.http.delete(path).subscribe(
      resp => console.log('eliminado'),
      error => console.log('error occur, delete fail'));
  }

  updateVoluntario(grupo:any,id:any){
    const path= this.api+id+'/';
    return this.http.patch(path,grupo);
  }
}
