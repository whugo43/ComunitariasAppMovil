import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

   private api=Api.api+'activity/';
  constructor(private http:HttpClient) {
  }
  
  getActivity(){
    const path= this.api;
    return this.http.get<any>(path)
  }

  getActivityId(id: string){ 
    return this.http.get<any>(this.api+id);

  }
  
  postActivity(activity){
    const path= this.api;
    return this.http.post(path,activity)
  }

  updateActivity(activity,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,activity)
  }
  
  deleteActivity(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path)
  }
}
