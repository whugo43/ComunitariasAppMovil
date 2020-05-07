import { Component, OnInit } from '@angular/core';
import {CampaignService} from '../services/campaign.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.page.html',
  styleUrls: ['./campaign.page.scss'],
})
export class CampaignPage implements OnInit {
  campaigns
  constructor(public campaignservice: CampaignService) { }

  ngOnInit() {
    this.campaignservice.getCampaigns()
    .subscribe(
      (data)=>{this.campaigns=data},
      (error)=>{console.log(error);}
      );
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();   
    }, 200);
  }

}
