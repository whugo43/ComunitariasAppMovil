import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DonacionesService {
  private api='http://127.0.0.1:8000/api/donation/';

  constructor(private http:HttpClient) { }
  getDonaciones(){
    const path= this.api;
    return this.http.get(path);
  }
}
