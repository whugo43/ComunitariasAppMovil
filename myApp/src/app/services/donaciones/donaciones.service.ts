import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class DonacionesService {
  private api=Api.api+'donation/';

  private headers:any={headers: {token: localStorage.getItem('token'),body:'body'}};

  constructor(private http:HttpClient) { }
  getDonaciones(){
    const path= this.api;
    return this.http.get(path,{headers: {token: localStorage.getItem('token'),body:'body'}});
  }

  getDonacionesId(id: string){ 
    return this.http.get<any>(this.api+id,{headers: {token: localStorage.getItem('token'),body:'body'}});

  }

  postDonaciones(donaciones){
    const path= this.api;
    return this.http.post(path,donaciones,{headers: {token: localStorage.getItem('token'),body:'body'}})

  }

  updateDonaciones(donaciones,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,donaciones,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }
  
  deleteDonaciones(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }

  updateDonaciones0(id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,{headers: {token: localStorage.getItem('token'),body:'body'}})
  } 

  CambiarEstadoDonaciones(id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,{headers: {token: localStorage.getItem('token'),body:'body'}})
  } 

}
