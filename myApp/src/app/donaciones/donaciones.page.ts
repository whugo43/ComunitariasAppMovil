import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DonacionesService } from '../services/donaciones/donaciones.service';
import {CategoriaService} from '../services/categoria/categoria.service';
import {ProviderService} from '../services/provider/provider.service';
import {CentroAcopioService} from '../services/centro-acopio/centro-acopio.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.page.html',
  styleUrls: ['./donaciones.page.scss'],
})
export class DonacionesPage implements OnInit {
  opcionfiltro=''
 
  donaciones
  proveedores
  centrosAcopios

  constructor(public router: Router,
              public alertController: AlertController,
              public donacionesService:DonacionesService,
              public categoriaservice: CategoriaService,
              public providerservice: ProviderService,
              public centroAcopioservice: CentroAcopioService ) { }

  ngOnInit() {
    
    this.opcionfiltro=''

    this.centroAcopioservice.getCentrosAcopios()
    .subscribe(
    (data)=>{this.centrosAcopios=data},
    (error)=>{console.log(error)}
    );
    this.donacionesService.getDonaciones()
    .subscribe(
      (data)=>{this.donaciones=data},
      (error)=>{console.log(error);}
      );
    
      this.providerservice.getPoviders()
      .subscribe(
      (data)=>{this.proveedores=data},
      (error)=>{console.log(error)}
      );
  }
  


  viewprovider(provider:string){
 
  }  

  cambiarestado(id: string){
    this.donacionesService.CambiarEstadoDonaciones(id).
    subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error);}
      );   
    this.ngOnInit(); 
    //setTimeout(this.ngOnInit,300); 
    
  }

  deleteDonacion(id: string){
    this.donacionesService.deleteDonaciones(id).
    subscribe(
      (data)=>{console.log(data)},
      (error)=>{console.log(error);}
      );   
    this.ngOnInit();  
      
  }

  deleteUpdateDonacion(id: string){
    this.donacionesService.updateDonaciones0(id).
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
    }, 300);
    
  }

  async presentAlertCambiarestado(id: string) {
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
            this.cambiarestado(id)
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertElimnarDonacion(id: string) {
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
            this.deleteDonacion(id)
          }
        }
      ]
    });
    await alert.present();
  }

  onChange(filtro){
    this.opcionfiltro=filtro
  }
  filtro() {
   // document.getElementById("filtro").innerHTML=
  }
}
