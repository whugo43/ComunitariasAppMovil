import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../../clases/user/user'
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { LoginResponse } from '../../interfaces/jwt-response-i'
import * as jwt_decode from "jwt-decode";
import { VoluntariosService } from '../voluntarios/voluntarios.service';
import { GrupoService } from '../grupo-service/grupo.service';
import { Voluntario } from '../../clases/voluntario/voluntario'
import { Router } from '@angular/router';
import { Api } from '../enum';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private api = Api.api + 'user/';
  private apiLogin = Api.api + 'login/';
  authSubject = new BehaviorSubject(false);
  private headers = new HttpHeaders().set('Token', localStorage.getItem('ACCESS_TOKEN'));

  gruposApoyos;
  voluntario: Voluntario;
  voluntarios: Voluntario[];

  constructor(private http: HttpClient,
    public router: Router,
    public voluntariosvervice: VoluntariosService,
    public gruposervice: GrupoService,
  ) {
   }

 getDecodeAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  async login(user: User): Promise<Observable<LoginResponse>> {
    return this.http.post<LoginResponse>(this.apiLogin, user/*,{ headers:{'Access-Control-Allow-Origin':'https://localhost:8100'}}*/);
  }

  async loginAxios(username:string,password:string){
    return await axios(this.apiLogin,
      {
      method: 'post',
      data:{"username":username,"password":password}
    }).then(response => {
      return response;
    });
  }


  logout() {
    localStorage.removeItem("ACCESS_TOKEN")
    localStorage.removeItem("EXPIRES_IN")
    this.router.navigateByUrl('/login')
  }

  tokenauth() {
    if (localStorage.getItem("ACCESS_TOKEN") == null) {
      return 0
    } else {
      return 1
    }

  }

  saveToken(token: string, expiresIn: string, userRole: string, userEmail: string, userName: string, userId: string): void {
    localStorage.setItem("ACCESS_TOKEN", token)
    localStorage.setItem("EXPIRES_IN", expiresIn)
    localStorage.setItem("USER_ROLE", userRole)
    localStorage.setItem("USER_EMAIL", userEmail)
    localStorage.setItem("USER_NAME", userName)
    localStorage.setItem("USER_ID", userId)
  }

  getUserIdLogin() {
    return localStorage.getItem("USER_ID")
  }

  getUserRolLogin() {
    return localStorage.getItem("userRole")

  }

  getLogins() {
    return this.http.get<User[]>(this.api, { headers: this.headers })
  }

  guardarUsuario(usuario) {
    const path = this.api;
    return this.http.post(path, usuario, { headers: this.headers })
  }

  getUserId(id: any) {
    return this.http.get<User>(this.api + id, { headers: this.headers });
  }

  updateUser(user: any, id: any) {
    const path = this.api + id + '/';
    return this.http.patch(path, user, { headers: this.headers });
  }

  deleteUser(id: string) {
    const path = `${this.api}${id}`;
    return this.http.delete(path, { headers: this.headers })
  }


}
