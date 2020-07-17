import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Distribucion } from '../../clases/distribucion/distribucion'
import { DistribucionService } from '../../services/distribucion/distribucion.service'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-distribucion-detalles',
  templateUrl: './distribucion-detalles.page.html',
  styleUrls: ['./distribucion-detalles.page.scss'],
})
export class DistribucionDetallesPage implements OnInit {

  private idDistribucion:string;
  private distribucion:Distribucion;

  constructor(private activateRoute: ActivatedRoute,
              private apiDistribucion:DistribucionService,public alertController: AlertController) { }

  recibiendoDatos(){
    this.activateRoute.queryParamMap.subscribe((data) => {
      this.idDistribucion=data.get('id');
    });
    this.apiDistribucion.getDistribucionId(this.idDistribucion).subscribe(data=>{
      this.distribucion=data;
    },error=>{
      this.presentAlertConfirm(
        'Error!',
        'Hemos tenido un error por favor intentelo mas tarde..'
      );
    });
  }

  async presentAlertConfirm(header:string,message:string) {
    let alert = await this.alertController.create({
      header: header,
      message: '<p><strong>'+message+'</strong>!!!</p>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
      ]
    });
    await alert.present();
  }

  ngOnInit() {
    this.recibiendoDatos();
  }



}
