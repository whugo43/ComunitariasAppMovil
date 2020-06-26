import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { User } from '../../clases/user/user'
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import {tap, catchError } from 'rxjs/operators';
import {JwtResponseI, LoginResponse} from '../../interfaces/jwt-response-i'
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private api = 'http://127.0.0.1:8000/api/user/';
  private apiLogin = 'http://127.0.0.1:8000/api/login/';
  authSubject=new BehaviorSubject(false);
  private token: string;

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
    
  }

  getDecodeAccessToken(token: string) {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  login(user:User): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.apiLogin, user)
                .pipe(
                  catchError(this.handleError)
                );
  }

  logout(): void{
    this.token='';
    localStorage.removeItem("ACCESS_TOKEN")
    localStorage.removeItem("EXPIRES_IN")
  }
  
  saveToken(token:string, expiresIn:string): void{
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
