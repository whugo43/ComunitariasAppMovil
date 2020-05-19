import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CentroAcopioService } from "../services/centro-acopio.service"
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-centro-acopio',
  templateUrl: './centro-acopio.page.html',
  styleUrls: ['./centro-acopio.page.scss'],
})
export class CentroAcopioPage implements OnInit {
  public indice: number = 0;
  public lista: any[] = [];
  public accionEditar: boolean = false;
  public seleccionado: any;

  constructor(public activateRoute: ActivatedRoute, 
    private conexionApi: CentroAcopioService,private alertController:AlertController) {
    this.recibiendoDatosApi();
  }
  doRefresh(event:any) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();   
    }, 200);
  }

  checklist() {
    return this.lista.length < 1;
  }

  public recibiendoDatosApi() {
    /* Recibiendo los datos guardados de la api*/
    this.conexionApi.getCentrosAcopios().subscribe(data => {
      data.forEach(f=>{
        this.lista.push(f);
      });
    });
    console.log(this.lista);
  }

  ngOnInit() {
  }

  async presentAlertConfirm(id:any) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            console.log(id);
            this.conexionApi.deleteCentroAcopio(id);
          }
        }
      ]
    });

    await alert.present();
  }

  public eliminar(){

  }

  public editar(id: string) {
    this.accionEditar = true;
    this.seleccionado = this.bucarid(id);
  }

  public bucarid(id: string) {
    this.lista.forEach(data => {
      if (data.id == id) {
        this.seleccionado = data;
      }
    });
  }
}
