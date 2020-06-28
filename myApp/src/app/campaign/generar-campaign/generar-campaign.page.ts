import { Component, OnInit } from '@angular/core';
import {CampaignService} from '../../services/campaign/campaign.service';
import {ScopeService} from '../../services/scope/scope.service';
import { AlertController } from '@ionic/angular';
import {Campaign} from '../../interfaces/campaign';
import { GrupoService } from 'src/app/services/grupo-service/grupo.service';
import { VoluntariosService } from 'src/app/services/voluntarios/voluntarios.service';

@Component({
  selector: 'app-generar-campaign',
  templateUrl: './generar-campaign.page.html',
  styleUrls: ['./generar-campaign.page.scss'],
})
export class GenerarCampaignPage implements OnInit {
  Scopes
  imageSrc;
  photo: File;
  formularios={
    scope:'',
    photo: '',
    name: '',
    description: '',
    contactName:''
    };
    
  formData= new FormData();
  gruposApoyos;
  voluntarios;
  idcreador: string;
  

  constructor(public alertController: AlertController,
              public scopeService:ScopeService,
              public campaignservice:CampaignService,
              public voluntariosvervice: VoluntariosService,
              public gruposervice: GrupoService) { }

  ngOnInit() {
    this.Getscopes()
  }

  Getscopes(){
    this.scopeService.getScope()
    .subscribe(
      (data)=>{this.Scopes=data
      },
      (error)=>{console.log(error);}
      );
  }

  postCampaign(){ 
    this.formData.append("name",this.formularios.name) 
    this.formData.append("contactName", this.formularios.contactName) 
    this.formData.append("description",this.formularios.description)
    this.formData.append("scope",this.formularios.scope) 
    this.formData.append("photo",this.photo) 
    this.formData.append("createdBy","hugo wong") 

    this.campaignservice.postCampaigns(this.formData).subscribe(
      (newTask)=>{console.log("metodo create");}
    );
    }

    changeListener($event) : void {
      this.photo = $event.target.files[0];
    }

    readURL(event): void {
      if (event.target.files && event.target.files[0]) {
          const file = event.target.files[0];
          this.photo = event.target.files[0];
  
          const reader = new FileReader();
          reader.onload = e => this.imageSrc = reader.result;
  
          reader.readAsDataURL(file);
      }
  }
  removePic() {
    this.imageSrc = null;
  }

}
