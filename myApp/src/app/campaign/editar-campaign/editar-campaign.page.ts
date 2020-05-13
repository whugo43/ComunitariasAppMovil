import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {CampaignService} from '../../services/campaign.service';

@Component({
  selector: 'app-editar-campaign',
  templateUrl: './editar-campaign.page.html',
  styleUrls: ['./editar-campaign.page.scss'],
})
export class EditarCampaignPage implements OnInit {

  campaign=[];
  id: string;

  constructor(private activateRoute: ActivatedRoute,public campaignservice: CampaignService ) { }
  photo: File;
  formulariocategoria={
    photo: '',
    name: '',
    description: '',
    contactName:'',
    createdBy: ''
    }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const detallecampaign = paramMap.get('campaignId')
      this.id = detallecampaign
      this.campaignservice.getCampaignsId(detallecampaign)
      .subscribe(
      (data)=>{this.campaign=data},
      (error)=>{console.log(error);}
      )
    });
  }
   formData= new FormData();

  postCampaign(){   
    this.formData.append("name",this.formulariocategoria.name) 
    this.formData.append("contactName", this.formulariocategoria.contactName) 
    this.formData.append("description",this.formulariocategoria.description)  
    this.formData.append("createdBy", this.formulariocategoria.createdBy) 
   
    console.log("metodo update")
 
    this.campaignservice.updateCampaigns(this.formData,this.id).subscribe(
      (newTask)=>{console.log(newTask);});
    }

    changeListener($event) : void {
      this.photo = $event.target.files[0];
      this.formData.append("photo",this.photo) 
    }

}
