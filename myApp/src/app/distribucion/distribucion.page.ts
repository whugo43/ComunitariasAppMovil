import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DistribucionService } from '../services/distribucion/distribucion.service';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-distribucion',
  templateUrl: './distribucion.page.html',
  styleUrls: ['./distribucion.page.scss'],
})

export class DistribucionPage implements OnInit {

  public distribucion_registrada: any[] = [];
  public indice: number = 0;
  private seleccionado:string='';
  private encargadoTipo:string='';
  private encargadoNombre:string='';
  private VOLUNTARIO:string='1';
  private GRUPO:string='2';
  private apiVoluntarios:string='http://localhost:8000/api/volunteer/';
  private apiGrupos:string='http://localhost:8000/api/support-group/';

  constructor(private activateRoute: ActivatedRoute, private conexionApi: DistribucionService
  ,private alertController:AlertController,private conexion:HttpClient)
   {
    this.recibiendoDatosApi();
  }

  public recibiendoDatosApi() {
    /* Recibiendo los datos guardados de la api*/
    this.conexionApi.getDistribuciones().subscribe(data => {
      data.forEach(f=>{
        this.distribucion_registrada.push(f);
        if(f.manager_type==this.VOLUNTARIO){
          this.conexion.get(this.apiVoluntarios).subscribe(voluntarios=>{
            console.log(voluntarios['firstName']);  
          });
        }
        
        const datos={
          id:f.id,
          departureAddress:'',
          destinationAddress:'',

        }
      })
    });
    console.log(this.distribucion_registrada);
  }

  async presentAlertConfirm(id:any) {
    this.obtenerNombre(id);
    let alert = await this.alertController.create({
      header: 'Confirmación!',
      message: '<strong>Esta seguro que desea eliminar la Distribucion de: '+this.seleccionado+'</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            console.log('Confirm Okay');
            console.log(id);
            this.conexionApi.eliminarDistribucion(id);
          }
        }
      ]
    });
    await alert.present();
  }

  obtenerNombre(id:any){
    this.distribucion_registrada.forEach(data=>{
      if(data['id']==id){
        this.seleccionado=data['DepartureAddress'].toString()+' a '+data['DestinationAddress'].toString();
        return;
      }
    });
  }

  editar(){

  }

  ngOnInit() {
    
  }

}
