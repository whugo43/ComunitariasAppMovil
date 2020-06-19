import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController, NavParams } from '@ionic/angular';
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
              navParams: NavParams,
              public donacionesService:DonacionesService) { 
                this.id = navParams.get('id');
              }

  ngOnInit() {
    console.log(this.id)
  }

  cambiarestado(){

    let cont=1;  
    while(cont==1){
      if (cont==1){
        this.donacionesService.CambiarEstadoDonaciones(this.id).
        subscribe(
          (data)=>{console.log(data); 
                  cont=0},
          (error)=>{console.log(error);}
          ); 
      }
      if(cont!=1){  
      console.log("inficio")
      this.ngOnInit();
      console.log("final")
      } 
    }
    }

  deleteDonacion(){
    this.donacionesService.deleteDonaciones(this.id).
    subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error);}
      );   
    this.ngOnInit();     
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
            console.log('Confirm Cancel: blah');
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
            console.log('Confirm Cancel: blah');
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

  editarDonacion(){
    this.router.navigateByUrl('/donaciones/'+this.id);
  }


}

