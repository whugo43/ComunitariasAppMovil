import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Grupo } from '../../clases/grupo/grupo'
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  private api = Api.api+'support-group/';
  private headers:any={headers: {token: localStorage.getItem('token'),body:'body'}};

  constructor(private http: HttpClient) { }

  getGrupo() {
    const path = this.api;
    return this.http.get<Grupo[]>(this.api,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }
  getApi() {
    return this.api;
  }

  guardarGrupo(Grupo) {
    const path = this.api;
    return this.http.post(path, Grupo,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }

  getGrupoId(id: string) {
    return this.http.get<Grupo>(this.api + id,{headers: {token: localStorage.getItem('token'),body:'body'}})};

  deleteGrupo(id: string) {
    const path = `${this.api}${id}`;
    console.log(path);
    return this.http.delete(path,{headers: {token: localStorage.getItem('token'),body:'body'}}).subscribe(
      resp => console.log('eliminado'),
      error => console.log('error occur, delete fail'));
  }

  updateGrupo(grupo: any, id: any) {
    const path = this.api + id + '/';
    return this.http.patch(path, grupo,{headers: {token: localStorage.getItem('token'),body:'body'}});
  }

}
