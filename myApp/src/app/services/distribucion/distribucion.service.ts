import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Distribucion } from '../../clases/distribucion/distribucion'
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class DistribucionService {
  private api: string = Api.api+'distribution/';
  constructor(private http: HttpClient) { }

  getDistribuciones() {
    return this.http.get<Distribucion[]>(this.api);
  }

  eliminarDistribucion(id: string) {
    return this.http.delete(this.api+id).subscribe(resp=>{
      console.log("Eliminacion exitosa en Distribucion"),
      error=>{console.log("Eliminacion fallida en Distribucion")}
    });
  }

  agregarDistribucion(formDistribucion:any){
    return this.http.post(this.api,formDistribucion).subscribe(mensaje=>{
      console.log(mensaje);
    });
  }

  actualizarDistribucion(distribucion:any,id:any){
    const path= this.api+id+'/';
    return this.http.patch(path,distribucion);
  }
  getDistribucionId(id:any){
    return this.http.get<Distribucion>(this.api+id);
  }
}
