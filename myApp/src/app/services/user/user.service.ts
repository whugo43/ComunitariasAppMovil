import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from '../enum';
import { User } from '../../clases/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api=Api.api+'user/';
  constructor(private http: HttpClient) { }

  headers = new HttpHeaders().set('Token', localStorage.getItem('ACCESS_TOKEN'));

  getUser(){
    this.headers = new HttpHeaders().set('Token', localStorage.getItem('ACCESS_TOKEN'));
    return this.http.get<User[]>(this.api, { headers: this.headers });
  }
  getUserId(id: string){ 
    console.log(this.headers)
    return this.http.get<any>(this.api + id, { headers: this.headers });

  }
  postUser(user){
    const path= this.api;
    return this.http.post(path, user, { headers: this.headers });

  }

  updateUser(user,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path, user, { headers: this.headers });
  }
  
  deleteUser(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path, { headers: this.headers });
  }

}

