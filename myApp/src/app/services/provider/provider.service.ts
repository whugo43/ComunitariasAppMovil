import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Api } from '../enum'
import {Provider} from '../../interfaces/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private api=Api.api+'provider/';
  constructor(private http:HttpClient) {
   console.log('providers');
  }
  
  getProvider(){
    const path= this.api;
    return this.http.get<Provider[]>(path)
  }

  getProviderId(id: string){ 
    return this.http.get<any>(this.api+id);

  }
  
  postProvider(provider){
    const path= this.api;
    return this.http.post(path,provider)
  }

  updateProvider(provider,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,provider)
  }
  
  deleteProvider(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path)
  }

}
