import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {CampaignService} from '../../services/campaign.service';

@Component({
  selector: 'app-detalle-campaign',
  templateUrl: './detalle-campaign.page.html',
  styleUrls: ['./detalle-campaign.page.scss'],
})
export class DetalleCampaignPage implements OnInit {
  campaign=[];
  id: string;

  constructor(private activateRoute: ActivatedRoute,public campaignservice: CampaignService ) { }

  ngOnInit() {
    
    this.activateRoute.paramMap.subscribe(paramMap => {
      const detallecampaign = paramMap.get('id')
      this.id = detallecampaign
      this.campaignservice.getCampaignsId(detallecampaign)
      .subscribe(
      (data)=>{this.campaign=data},
      (error)=>{console.log(error);}
      )
    }); 
  }

}
