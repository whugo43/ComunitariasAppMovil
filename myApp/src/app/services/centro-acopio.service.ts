import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CentroAcopioService {
  private api='http://127.0.0.1:8000/api/collection-center/';

  constructor(private http:HttpClient) { }
  getCentrosAcopios(){
    const path= this.api;
    return this.http.get(path);
  }

}
