import { Component, OnInit } from '@angular/core';
import {CampaignService} from '../../services/campaign.service';

@Component({
  selector: 'app-generar-campaign',
  templateUrl: './generar-campaign.page.html',
  styleUrls: ['./generar-campaign.page.scss'],
})
export class GenerarCampaignPage implements OnInit {
  formulariocategoria={
    name: '',
    description: '',
    contactName:'',
    createdBy: ''
    }

  constructor(public campaignservice:CampaignService) { }

  ngOnInit() {
  }

  postCampaign(){
    const campaign={
    photo:  'http://localhost:8000/media/campaigns/FOTO.jpg',
    name: this.formulariocategoria.name,
    contactName: this.formulariocategoria.contactName,
    description:this.formulariocategoria.description,
    
    
    createdBy: this.formulariocategoria.createdBy
    };
    
    this.campaignservice.postCampaigns(campaign).subscribe(
      (newTask)=>{console.log(newTask);}
    );
    }

}
