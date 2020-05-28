import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {CampaignService} from '../services/campaign/campaign.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.page.html',
  styleUrls: ['./campaign.page.scss'],
})
export class CampaignPage implements OnInit {
  campaigns
  constructor(public alertController: AlertController,
              public campaignservice: CampaignService) { }

  ngOnInit() {
    this.campaignservice.getCampaigns()
    .subscribe(
      (data)=>{this.campaigns=data
      },
      (error)=>{console.log(error);}
      );
  }

  deleteCampaign(id: string){
    this.campaignservice.deleteCampaigns(id).
    subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error);}
      );
    this.ngOnInit();       
  }

  deleteUpdateCampaign(id: string){
    this.campaignservice.updateCampaigns0(id).
    subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error);}
      ); 
    this.ngOnInit();      
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();   
    }, 200);
  }

  async presentAlertElimnarCampaign(id: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',

      header: 'Esta seguro que desea eliminar esta campaña!',
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
          handler: () => {
            console.log('Confirm Okay');
            this.deleteCampaign(id)
          }
        }
      ]
    });
    await alert.present();
  }

}
