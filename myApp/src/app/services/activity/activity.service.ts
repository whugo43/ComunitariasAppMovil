import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

   private api=Api.api+'activity/';
   private headers:any={headers: {token: localStorage.getItem('token'),body:'body'}};

  constructor(private http:HttpClient) {
  }
  
  getActivity(){
    const path= this.api;
    return this.http.get<any>(path,this.headers)
  }

  getActivityId(id: string){ 
    return this.http.get<any>(this.api+id,this.headers);

  }
  
  postActivity(activity){
    const path= this.api;
    return this.http.post(path,activity,this.headers)
  }

  updateActivity(activity,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,activity,this.headers)
  }
  
  deleteActivity(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path,this.headers)
  }
}
