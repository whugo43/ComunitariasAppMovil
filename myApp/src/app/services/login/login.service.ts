import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../../clases/user/user'
import { BehaviorSubject, Observable } from 'rxjs';
import {tap } from 'rxjs/operators';
import {JwtResponseI} from '../../interfaces/jwt-response-i'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private api = 'http://127.0.0.1:8000/api/user/';
  private apiLogin = 'http://127.0.0.1:8000/api/login/';
  authSubject=new BehaviorSubject(false);
  private token: string;

  constructor(private http: HttpClient) { }

  login(user:User): Observable<JwtResponseI>{
    return this.http.post<JwtResponseI>(this.apiLogin, user).pipe(tap(
      (res:JwtResponseI)=>{
        if(res){
          this.saveToken(res.dataUser.accessToken,res.dataUser.expiresIn)

        }
      })
    );
  }

  logout(): void{
    this.token='';
    localStorage.removeItem("ACCESS_TOKEN")
    localStorage.removeItem("EXPIRES_IN")
  }
  private saveToken(token:string, expiresIn:string): void{
    localStorage.setItem("ACCESS_TOKEN",token)
    localStorage.setItem("EXPIRES_IN",expiresIn)
    this.token=token;
  }
  private getToken():string{
    if (this.token){
      this.token=localStorage.getItem("ACCESS_TOKEN")
    }
    return this.token
  }

  getLogins() {
    const path = this.api;
    return this.http.get<User[]>(path)
  }

  guardarUsuario(usuario) {
    const path = this.api;
    return this.http.post(path, usuario)
  }

  getUserId(id: string){ 
    return this.http.get<User>(this.api+id);
  }

  updateUser(user: any, id: any) {
    const path = this.api + id + '/';
    return this.http.patch(path, user);
  }


}
