import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController, NavParams, PopoverController } from '@ionic/angular';
import { DonacionesService } from '../../services/donaciones/donaciones.service';

@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.component.html',
  styleUrls: ['./donacion.component.scss'],
})
export class DonacionComponent implements OnInit {
  id = '';
  

  constructor(public router: Router,
              public alertController: AlertController,
              private popoverController: PopoverController,
              private navParams: NavParams,
              public donacionesService:DonacionesService) { 
                this.id = navParams.get('id');
              }

  ngOnInit() {
  }

  cambiarestado(){

    this.donacionesService.CambiarEstadoDonaciones(this.id).
    subscribe(
      (data)=>{ console.log(data);
                this.DismissClick()
                this.router.navigateByUrl('/donaciones');},
                
      (error)=>{console.log(error);}
    ); 

    }

  deleteDonacion(){
    this.donacionesService.deleteDonaciones(this.id).
    subscribe(
      (data)=>{ console.log(data),
                this.DismissClick()  
                this.router.navigateByUrl('/donaciones'); },

      (error)=>{console.log(error);}
      );
       
  }

  async presentAlertCambiarestado() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',

      header: 'Esta seguro que desea cambiar el estado de esta donacion!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.DismissClick()  
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.cambiarestado()
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertElimnarDonacion() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',

      header: 'Esta seguro que desea eliminar esta donacion!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.DismissClick()  
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.deleteDonacion()
          }
        }
      ]
    });
    await alert.present();
  }

  async DismissClick() {
    await this.popoverController.dismiss();
  }
  
}

