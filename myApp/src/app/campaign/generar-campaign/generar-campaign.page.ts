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
    photo: '',
    name: '',
    description: '',
    contactName:'',
    createdBy: ''
    }

  constructor(public campaignservice:CampaignService) { }

  ngOnInit() {
  }

  postCampaign(){ 
    const formData= new FormData();
    formData.append("name",this.formulariocategoria.name) 
    formData.append("contactName", this.formulariocategoria.contactName) 
    formData.append("description",this.formulariocategoria.description) 
    formData.append("photo",this.photo) 
    formData.append("createdBy", this.formulariocategoria.createdBy) 

    console.log("metodo create")
 
    this.campaignservice.postCampaigns(formData).subscribe(
      (newTask)=>{console.log(newTask);}
    );
    }

    changeListener($event) : void {
      this.photo = $event.target.files[0];
      console.log( "metodo listener")
      console.log( $event.target.files[0])
    }

}
