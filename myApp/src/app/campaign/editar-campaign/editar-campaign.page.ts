import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {CampaignService} from '../../services/campaign/campaign.service';
import {ScopeService} from '../../services/Scope/scope.service';

@Component({
  selector: 'app-editar-campaign',
  templateUrl: './editar-campaign.page.html',
  styleUrls: ['./editar-campaign.page.scss'],
})
export class EditarCampaignPage implements OnInit {
  imageSrc;
  Scopes;

  campaign=[];
  id: string;
  formData= new FormData();
  photo: File;
  formularios={
    scope:'',
    photo: '',
    name: '',
    description: '',
    contactName:'',
    }

  constructor(private activateRoute: ActivatedRoute,
              public campaignservice: CampaignService,
              public scopeService:ScopeService,
              private cdRef : ChangeDetectorRef ) { }
  
  ngAfterContentChecked() {
    this.cdRef.detectChanges();
  }


  ngOnInit() {
    this.Getscopes();
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

   Getscopes(){
    this.scopeService.getScope()
    .subscribe(
      (data)=>{this.Scopes=data
      },
      (error)=>{console.log(error);}
      ); 
  }

  UpdateCampaign(){   
    this.formData.append("name",this.formularios.name) 
    this.formData.append("contactName", this.formularios.contactName) 
    this.formData.append("scope",this.formularios.scope)  
    this.formData.append("description",this.formularios.description)  
    console.log("metodo update")
 
    this.campaignservice.updateCampaigns(this.formData,this.id).subscribe(
      (newTask)=>{console.log(newTask);});
    }

    changeListener($event) : void {
      this.photo = $event.target.files[0];
      this.formData.append("photo",this.photo)
       
    }

    readURL(event): void {
      if (event.target.files && event.target.files[0]) {
          const file = event.target.files[0];
          this.photo = event.target.files[0];
          this.formData.append("photo",this.photo)
  
          const reader = new FileReader();
          reader.onload = e => this.imageSrc = reader.result;
  
          reader.readAsDataURL(file);
      }
  }
  removePic() {
    this.imageSrc = null;
  }

}
