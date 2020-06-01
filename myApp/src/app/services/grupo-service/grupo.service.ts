import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Grupo } from '../../clases/grupo/grupo'

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  private api = 'http://localhost:8000/api/support-group/';
  constructor(private http: HttpClient) { }

  getGrupo() {
    const path = this.api;
    return this.http.get<Grupo[]>(this.api)
  }
  getApi() {
    return this.api;
  }

  guardarGrupo(Grupo) {
    const path = this.api;
    return this.http.post(path, Grupo)
  }

  getGrupoId(id: string) {
    return this.http.get<Grupo>(this.api + id);;
  }

  deleteGrupo(id: string) {
    const path = `${this.api}${id}`;
    console.log(path);
    return this.http.delete(path).subscribe(
      resp => console.log('eliminado'),
      error => console.log('error occur, delete fail'));
  }

  updateGrupo(grupo: any, id: any) {
    const path = this.api + id + '/';
    return this.http.patch(path, grupo);
  }

}
