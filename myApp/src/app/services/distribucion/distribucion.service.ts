import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Distribucion } from '../../clases/distribucion/distribucion'
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class DistribucionService {
  private api: string = Api.api+'distribution/';
  private headers:any={headers: {token: localStorage.getItem('token'),body:'body'}};

  constructor(private http: HttpClient,) { }

  getDistribuciones() {
    return this.http.get<Distribucion[]>(this.api,{headers: {token: localStorage.getItem('token'),body:'body'}});
  }

  eliminarDistribucion(id: string) {
    return this.http.delete(this.api+id,{headers: {token: localStorage.getItem('token'),body:'body'}}).subscribe(resp=>{
      console.log("Eliminacion exitosa en Distribucion"),
      error=>{console.log("Eliminacion fallida en Distribucion")}
    });
  }

  agregarDistribucion(formDistribucion:any){
    return this.http.post(this.api,formDistribucion,{headers: {token: localStorage.getItem('token'),body:'body'}}).subscribe(mensaje=>{
      console.log(mensaje);
    },error=>{
      console.log(error)
    });
  }

  actualizarDistribucion(distribucion:any,id:any){
    const path= this.api+id+'/';
    return this.http.patch(path,distribucion,{headers: {token: localStorage.getItem('token'),body:'body'}});
  }
  getDistribucionId(id:any){
    return this.http.get<Distribucion>(this.api+id,{headers: {token: localStorage.getItem('token'),body:'body'}});
  }
}
