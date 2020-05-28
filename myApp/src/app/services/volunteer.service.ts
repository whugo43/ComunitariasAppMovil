import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Volunteer} from '../interfaces/volunteer';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  private api='http://localhost:8000/api/volunteer/';

  constructor(private http: HttpClient) {
    console.log("voluntarios");
   }

  getVolunteer(){
    const path= this.api;
    return this.http.get<Volunteer[]>(path)
  }

  getVolunteerId(id: string){ 
    return this.http.get<any>(this.api+id);

  }

  postVolunteer(campaign:Volunteer){
    const path= this.api;
    return this.http.post(path,campaign)
  }

  updateVolunteer(campaign:Volunteer,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,campaign)
  }
  
  deleteVolunteer(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path)
  }

  updateVolunteer0(id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,
    {
      state:'0'
    })

  }  
  
}
