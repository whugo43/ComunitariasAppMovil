import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http:HttpClient) { }

  getProveedores(){
    //return this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=15');
    return this.http.get<any>('http://127.0.0.1:8000/api/provider/');
  }

  getProveedor(proveedorId: string){
    console.log('http://127.0.0.1:8000/api/provider/'+proveedorId)
    return this.http.get<any>('http://127.0.0.1:8000/api/provider/'+proveedorId);
  }

  addProveedor(){}

  deleteProveedor(){}
}
