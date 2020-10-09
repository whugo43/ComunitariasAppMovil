import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Grupo } from '../../clases/grupo/grupo'
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  private api = Api.api+'support-group/';

  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders().set("token",localStorage.getItem('ACCESS_TOKEN'));

  getGrupo() {
    this.headers = new HttpHeaders().set("token",localStorage.getItem('ACCESS_TOKEN'));
    //console.log(this.headers)
    return this.http.get<Grupo[]>(this.api, { headers: this.headers })
  }
  getApi() {
    return this.api;
  }

  guardarGrupo(Grupo) {
    const path = this.api;
    return this.http.post(path, Grupo, { headers: this.headers })
  }

  getGrupoId(id: string) {
    return this.http.get<Grupo>(this.api + id, { headers: this.headers });
  }

  deleteGrupo(id: string) {
    const path = `${this.api}${id}`;
    return this.http.delete(path, { headers: this.headers }).subscribe(
      resp => console.log('eliminado'),
      error => console.log('error occur, delete fail'));
  }

  updateGrupo(grupo: any, id: any) {
    const path = this.api + id + '/';
    return this.http.patch(path, grupo, { headers: this.headers });
  }

}
