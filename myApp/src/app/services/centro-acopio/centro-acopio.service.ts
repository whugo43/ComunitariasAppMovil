import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CentroAcopioClass } from '../../clases/centro-acopio/centro-acopio-class';
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class CentroAcopioService {
  private api = Api.api+'collection-center/';
  constructor(private http: HttpClient) {
  }

  getCentrosAcopios() {
    const path = this.api;
    return this.http.get<CentroAcopioClass[]>(this.api)
  }
  getApi() {
    return this.api;
  }

  guardarCentroAcopio(centroAcopio:any) {
    const path= this.api;
    return this.http.post(path,centroAcopio)
  }

  getCentroAcopioId(id: string){ 
    return this.http.get<CentroAcopioClass>(this.api+id);
  }

  deleteCentroAcopio(id: string){
    const path=`${this.api}${id}`;
    console.log(path);
    return this.http.delete(path).subscribe(
      resp => console.log('eliminado'),
      error => console.log('error occur, delete fail'));
  }

  updateCentroAcopio(centroAcopio:any,id:any){
    const path= this.api+id+'/';
    return this.http.patch(path,centroAcopio);
  }
} 

