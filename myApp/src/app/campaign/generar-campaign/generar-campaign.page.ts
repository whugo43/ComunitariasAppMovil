import { Component, OnInit } from '@angular/core';
import {CampaignService} from '../../services/campaign/campaign.service';
import {ScopeService} from '../../services/Scope/scope.service';
import { AlertController } from '@ionic/angular';
import {Campaign} from '../../interfaces/campaign';

@Component({
  selector: 'app-generar-campaign',
  templateUrl: './generar-campaign.page.html',
  styleUrls: ['./generar-campaign.page.scss'],
})
export class GenerarCampaignPage implements OnInit {
  imageSrc;
  Scopes;
  photo: File;
  formularios={
    scope:'',
    photo: '',
    name: '',
    description: '',
    contactName:'',
    createdBy: ''
    };
  formData= new FormData();
  

  constructor(public alertController: AlertController,
              public scopeService:ScopeService,
              public campaignservice:CampaignService) { }

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
    this.formData.append("createdBy", this.formularios.createdBy) 

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

  agregarscopes(name,description){
    let formscope= new FormData();
    formscope.append("name",name) 
    formscope.append("description",description)
    formscope.append("createdBy","hugo Wong")
    this.scopeService.postScope(formscope).subscribe(
      (newTask)=>{console.log("metodo create");}
    ); 
    
    
  }

  async presentAlertScope() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nuevo Alcance',
      inputs: [
        {
          name: 'name',
          placeholder: 'Nombre',
          
        },
        {
          name: 'description',
          placeholder: 'Descripcion',
          type: 'textarea'
        }
      ],

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            if(data.name!= "" && data.description!=""){
              this.agregarscopes(data.name,data.description) 
            }else if(data.name== "" && data.description==""){
              this.failedAlert("Los campos nombres y descripcion son requeridos");
            }else if(data.name== ""){
              this.failedAlert("El campo nombre es requerido");
            }else if(data.description== ""){
              this.failedAlert("El campo descripcion es requerido");
            }
          }
        }
      ]
    });
    await alert.present();
  }
  async failedAlert(text) {
    const alert = await this.alertController.create({
     cssClass: 'my-custom-class',
     header: text,
    buttons: [{
    text: 'OK',
      handler: () => {
        this.presentAlertScope();
      }
    }]   
    });
    await alert.present();
  }

}
