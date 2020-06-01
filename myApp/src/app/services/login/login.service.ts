import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../../clases/user/user'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private api = 'http://127.0.0.1:8000/api/user/';
  private nombref: any;

  constructor(private http: HttpClient) { }

  getLogins() {
    const path = this.api;
    return this.http.get<User[]>(path)
  }

  guardarUsuario(usuario) {
    const path = this.api;
    return this.http.post(path, usuario)
  }



}
