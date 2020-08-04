import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Api } from '../enum'
import {Provider} from '../../interfaces/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private api=Api.api+'provider/';
  private headers:any={headers: {token: localStorage.getItem('token'),body:'body'}};

  constructor(private http:HttpClient) {
  }
  
  getProvider(){
    const path= this.api;
    return this.http.get<Provider[]>(path,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }

  getProviderId(id: string){ 
    return this.http.get<any>(this.api+id,{headers: {token: localStorage.getItem('token'),body:'body'}});

  }
  
  postProvider(provider){
    const path= this.api;
    return this.http.post(path,provider,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }

  updateProvider(provider,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,provider,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }
  
  deleteProvider(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }

}
