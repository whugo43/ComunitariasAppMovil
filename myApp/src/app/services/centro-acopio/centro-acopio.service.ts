import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CentroAcopioClass } from '../../clases/centro-acopio/centro-acopio-class';


@Injectable({
  providedIn: 'root'
})
export class CentroAcopioService {
  private api = 'http://127.0.0.1:8000/api/collection-center/';
  constructor(private http: HttpClient) {
   
  }

  getCentrosAcopios() {
    const path = this.api;
    return this.http.get<CentroAcopioClass[]>(this.api)
  }
  getApi() {
    return this.api;
  }

  guardarCentroAcopio(centroAcopio) {
    const path= this.api;
    return this.http.post(path,centroAcopio)
  }

  getCentroAcopioId(id: string){ 
    return this.http.get<any>(this.api+id);
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

