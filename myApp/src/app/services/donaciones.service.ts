import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DonacionesService {

  constructor(private http:HttpClient) { }
  getDonaciones(){
    return this.http.get('http://127.0.0.1:8000/api/donation/');
  }
}
