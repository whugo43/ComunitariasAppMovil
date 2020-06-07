import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GroupMember } from '../../clases/miembros-grupos/group-member'

@Injectable({
  providedIn: 'root'
})
export class GroupMemberServiceService {

  private api = 'http://localhost:8000/api/group-member/';
  constructor(private http: HttpClient) { }

  getGrupoMembers() {
    const path = this.api;
    return this.http.get<GroupMember[]>(this.api)
  }
  getApi() {
    return this.api;
  }

  guardarGrupoMember(Grupo) {
    const path = this.api;
    return this.http.post(path, Grupo);
  }

  getGrupoMemberId(id: string) {
    return this.http.get<GroupMember>(this.api + id);;
  }

  deleteGrupoMember(id: string) {
    const path = `${this.api}${id}`;
    console.log(path);
    return this.http.delete(path).subscribe(
      resp => console.log('eliminado'),
      error => console.log('error occur, delete fail'));
  }

  updateGrupoMember(grupo: any, id: any) {
    const path = this.api + id + '/';
    return this.http.patch(path, grupo);
  }
}
