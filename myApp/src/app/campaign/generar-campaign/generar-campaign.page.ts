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
  formularios={
    photo: '',
    name: '',
    description: '',
    contactName:'',
    createdBy: ''
    };
  formData= new FormData();

  constructor(public campaignservice:CampaignService) { }

  ngOnInit() {
  }

  postCampaign(){ 
    this.formData.append("name",this.formularios.name) 
    this.formData.append("contactName", this.formularios.contactName) 
    this.formData.append("description",this.formularios.description) 
    this.formData.append("photo",this.photo) 
    this.formData.append("createdBy", this.formularios.createdBy) 

    console.log("metodo create")
 
    this.campaignservice.postCampaigns(this.formData).subscribe(
      (newTask)=>{console.log(newTask);}
    );
    }

    changeListener($event) : void {
      this.photo = $event.target.files[0];
    }

}
