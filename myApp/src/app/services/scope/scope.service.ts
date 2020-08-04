import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class ScopeService {
  private api=Api.api+'scope/';
  private headers:any={headers: {token: localStorage.getItem('token'),body:'body'}};

  constructor(private http: HttpClient) { 
  }
  getScope(){
    const path= this.api;
    return this.http.get(path,{headers: {token: localStorage.getItem('token'),body:'body'}});
  }
  getScopeId(id: string){ 
    return this.http.get<any>(this.api+id,{headers: {token: localStorage.getItem('token'),body:'body'}});

  }
  postScope(Scope){
    const path= this.api;
    return this.http.post(path,Scope,{headers: {token: localStorage.getItem('token'),body:'body'}})

  }

  updateScope(Scope,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,Scope,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }
  
  deleteScope(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }
}
