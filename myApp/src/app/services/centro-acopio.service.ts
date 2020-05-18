import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CentroAcopioClass } from '../centro-acopio/centro-acopio-class';


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
} 
