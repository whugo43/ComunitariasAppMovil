import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api=Api.api+'user/';

  constructor(private http: HttpClient) { }
  getUser(){
    const path= this.api;
    return this.http.get(path);
  }
  getUserId(id: string){ 
    return this.http.get<any>(this.api+id);

  }
  postUser(user){
    const path= this.api;
    return this.http.post(path,user)

  }

  updateUser(user,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,user)
  }
  
  deleteUser(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path)
  }
}

