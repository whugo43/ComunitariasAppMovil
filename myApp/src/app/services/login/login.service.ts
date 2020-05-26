import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private api='http://127.0.0.1:8000/api/user/';

  constructor(private http:HttpClient) { }

  getLogins(){
    const path= this.api;
    return this.http.get(path)
  }
}
