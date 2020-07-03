import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api='http://127.0.0.1:8000/api/user/';

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

