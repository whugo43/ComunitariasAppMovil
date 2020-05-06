import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Campaigns} from '../interfaces/campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private client: HttpClient) { }

  getCampaigns(){

  }

}
