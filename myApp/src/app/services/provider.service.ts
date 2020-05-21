import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private api='http://127.0.0.1:8000/api/provider/';

  constructor(private http:HttpClient) { }

  getPoviders(){
    const path= this.api;
    return this.http.get(path);
  }
  getPoviderId(id: string){ 
    return this.http.get<any>(this.api+id);

  }


}
