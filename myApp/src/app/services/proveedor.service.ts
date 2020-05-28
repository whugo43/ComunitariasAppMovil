import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Proveedor} from '../interfaces/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private api='http://localhost:8000/api/proveedor/';

  constructor(private http: HttpClient) {
    console.log("proveedores");
   }

  getProveedor(){
    const path= this.api;
    return this.http.get<Proveedor[]>(path)
  }

  getProveedorId(id: string){ 
    return this.http.get<any>(this.api+id);

  }

  postProveedor(proveedor:Proveedor){
    const path= this.api;
    return this.http.post(path,proveedor)
  }

  updateProveedor(proveedor:Proveedor,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,proveedor)
  }
  
  deleteProveedor(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path)
  }

  updateProveedor0(id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,
    {
      state:'0'
    })

  }  
  
}
