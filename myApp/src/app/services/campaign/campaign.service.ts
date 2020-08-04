import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Campaign} from '../../interfaces/campaign';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Api } from '../enum'

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private api=Api.api+'campaign/';
  private headers:any={headers: {token: localStorage.getItem('token'),body:'body'}};

  constructor(private http: HttpClient) {
   }

  getCampaigns(){
    const path= this.api;
    return this.http.get<Campaign[]>(path,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }

  getCampaignsId(id: string){ 
    return this.http.get<any>(this.api+id,{headers: {token: localStorage.getItem('token'),body:'body'}});

  }

  postCampaigns(campaign){
    const path= this.api;
    return this.http.post(path,campaign,{headers: {token: localStorage.getItem('token'),body:'body'}})

  }

  updateCampaigns(campaign,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,campaign,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }
  
  deleteCampaigns(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path,{headers: {token: localStorage.getItem('token'),body:'body'}})
  }

  updateCampaigns0(id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,{headers: {token: localStorage.getItem('token'),body:'body'}})

  }  
  
}
