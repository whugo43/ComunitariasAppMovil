import { Component, OnInit } from '@angular/core';
import {CampaignService} from '../../services/campaign.service';
import {Campaign} from '../../interfaces/campaign';

@Component({
  selector: 'app-generar-campaign',
  templateUrl: './generar-campaign.page.html',
  styleUrls: ['./generar-campaign.page.scss'],
})
export class GenerarCampaignPage implements OnInit {
  photo: File;
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
    let campaign:Campaign= {
    
    photo:  this.photo,  
    name: this.formulariocategoria.name,
    
    contactName: this.formulariocategoria.contactName,
    description:this.formulariocategoria.description,
    
    
    createdBy: this.formulariocategoria.createdBy
    };
    
    this.campaignservice.postCampaigns(campaign).subscribe(
      (newTask)=>{console.log(newTask);}
    );
    }

    changeListener($event) : void {
      this.photo = $event.target.files[0];
    }

}
