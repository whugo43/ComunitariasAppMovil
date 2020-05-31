import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private api='http://127.0.0.1:8000/api/proveedor/';

  constructor(private http:HttpClient) { }
  getProveedor(){
    const path= this.api;
    return this.http.get(path);
  }

  getProveedorId(id: string){ 
    return this.http.get<any>(this.api+id);

  }

  postProveedor(proveedor){
    const path= this.api;
    return this.http.post(path,proveedor);

  }
}
