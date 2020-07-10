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

  constructor(private http: HttpClient) {
    console.log("campañas");
   }

  getCampaigns(){
    const path= this.api;
    return this.http.get<Campaign[]>(path)
  }

  getCampaignsId(id: string){ 
    return this.http.get<any>(this.api+id);

  }

  postCampaigns(campaign){
    const path= this.api;
    return this.http.post(path,campaign)

  }

  updateCampaigns(campaign,id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,campaign)
  }
  
  deleteCampaigns(id: string){
    const path=  `${this.api}${id}`;
    return this.http.delete(path)
  }

  updateCampaigns0(id: string){
    const path= this.api+id+'/';
    return this.http.patch(path,
    {
      state:'0'
    })

  }  
  
}
