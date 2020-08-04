import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GroupMember } from '../../clases/miembros-grupos/group-member'
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class GroupMemberServiceService {

  private api = Api.api+'group-member/';
  private headers:any={headers: {token: localStorage.getItem('token'),body:'body'}};


  constructor(private http: HttpClient) { }

  getGrupoMembers() {
    const path = this.api;
    return this.http.get<GroupMember[]>(this.api,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }
  getApi() {
    return this.api;
  }

  guardarGrupoMember(Grupo) {
    const path = this.api;
    return this.http.post(path, Grupo,{headers: {token: localStorage.getItem('token'),body:'body'}});
  }

  getGrupoMemberId(id: string) {
    return this.http.get<GroupMember>(this.api + id,{headers: {token: localStorage.getItem('token'),body:'body'}});
  }

  deleteGrupoMember(id: string) {
    const path = `${this.api}${id}`;
    console.log(path);
    return this.http.delete(path,{headers: {token: localStorage.getItem('token'),body:'body'}}).subscribe(
      resp => console.log('eliminado'),
      error => console.log('error occur, delete fail'));
  }

  updateGrupoMember(grupo: any, id: any) {
    const path = this.api + id + '/';
    return this.http.patch(path, grupo,{headers: {token: localStorage.getItem('token'),body:'body'}});
  }
}
