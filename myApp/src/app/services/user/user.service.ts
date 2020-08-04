import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../enum'
import { CreteByService } from '../create-by.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api=Api.api+'user/';
  private headers:any={headers: {token: localStorage.getItem('token'),body:"body"}};

  constructor(private http: HttpClient) { }
  getUser(){
    const path= this.api;
    return this.http.get(path,{headers: {token: localStorage.getItem('token'),body:'body'}});
  }
  getUserId(id: string){ 
    return this.http.get<any>(this.api+id,{headers: {token: localStorage.getItem('token'),body:'body'}});

  }
  postUser(user){
    const path= this.api;
    return this.http.post(path,user,{headers: {token: localStorage.getItem('token'),body:'body'}})

  }

  updateUser(user,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,user,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }
  
  deleteUser(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }

}

