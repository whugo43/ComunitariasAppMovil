import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CentroAcopioClass } from '../../clases/centro-acopio/centro-acopio-class';
import { Api } from '../enum'
import { CreteByService } from '../create-by.service'
import { LoginService } from '../../services/login/login.service'

@Injectable({
  providedIn: 'root'
})
export class CentroAcopioService {
  private api = Api.api + 'collection-center/';
  private headers:any={headers: {token: localStorage.getItem('token'),body:'body'}};

  constructor(private http: HttpClient,  private createBy:CreteByService, private loginsApi:LoginService) {
  }

  getCentrosAcopios() {
    console.log(localStorage.getItem("token"),this.headers);
    return this.http.get<CentroAcopioClass[]>(this.api,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }

  getApi() {
    return this.api;
  }

  guardarCentroAcopio(centroAcopio: any) {
    const path = this.api;
    return this.http.post(path, centroAcopio,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }

  getCentroAcopioId(id: string) {
    return this.http.get<CentroAcopioClass>(this.api + id,{headers: {token: localStorage.getItem('token'),body:'body'}});
  }

  deleteCentroAcopio(id: string) {
    const path = `${this.api}${id}`;
    console.log(path);
    return this.http.delete(path,{headers: {token: localStorage.getItem('token'),body:'body'}}).subscribe(
      resp => console.log('eliminado'),
      error => console.log('error occur, delete fail'));
  }

  updateCentroAcopio(centroAcopio: any, id: any) {
    const path = this.api + id + '/';
    return this.http.patch(path, centroAcopio,{headers: {token: localStorage.getItem('token'),body:'body'}});
  }
}

