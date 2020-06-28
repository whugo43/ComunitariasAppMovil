import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScopeService {
  private api='http://127.0.0.1:8000/api/scope/';

  constructor(private http: HttpClient) { 
  }
  getScope(){
    const path= this.api;
    return this.http.get(path);
  }
  getScopeId(id: string){ 
    return this.http.get<any>(this.api+id);

  }
  postScope(Scope){
    const path= this.api;
    return this.http.post(path,Scope)

  }

  updateScope(Scope,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,Scope)
  }
  
  deleteScope(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path)
  }
}
