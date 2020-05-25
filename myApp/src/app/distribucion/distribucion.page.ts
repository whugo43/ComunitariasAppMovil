import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DistribucionService } from '../services/distribucion/distribucion.service';
import { AlertController } from '@ionic/angular';
import { VoluntariosService } from '../services/voluntarios/voluntarios.service'
import { GrupoService } from '../services/grupo-service/grupo.service'
import { Distribucion } from '../clases/distribucion';

@Component({
  selector: 'app-distribucion',
  templateUrl: './distribucion.page.html',
  styleUrls: ['./distribucion.page.scss'],
})

export class DistribucionPage implements OnInit {

  public distribucion_registrada: Distribucion[] = [];
  public indice: number = 0;
  private seleccionado: string = '';
  private VOLUNTARIO: string = '1';
  private GRUPO: string = '2';

  constructor(private activateRoute: ActivatedRoute, private conexionApi: DistribucionService
    , private alertController: AlertController, private conexionVoluntaio: VoluntariosService,
    private conexionGrupo: GrupoService) {
    this.recibiendoDatosApi();
  }

  public recibiendoDatosApi() {
    /* Recibiendo los datos guardados de la api*/
    this.conexionApi.getDistribuciones().subscribe(data => {
      data.forEach(f => {
        if (f.manager_type == this.VOLUNTARIO) {
          this.conexionVoluntaio.getVoluntarios().subscribe(voluntarios => {
            voluntarios.forEach(voluntario => {
              f['manager_type'] = 'Voluntarios';
              if (f.user == voluntario.user) {
                f['user'] = voluntario.firstName;
              }
            });
          });
        }else{
          this.conexionGrupo.getGrupo().subscribe(grupos=>{
            grupos.forEach(grupo=>{
              f['manager_type']='Grupos';
              if(f.user==grupo.user){
                f['user']=grupo.name;
              }
            });
          });
        }
        this.distribucion_registrada.push(f);
      })
    });
    console.log(this.distribucion_registrada);
  }

  async presentAlertConfirm(id: any) {
    this.obtenerNombre(id);
    let alert = await this.alertController.create({
      header: 'Confirmación!',
      message: '<strong>Esta seguro que desea eliminar la Distribucion de: ' + this.seleccionado + '</strong>!!!',
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

  obtenerNombre(id: any) {
    this.distribucion_registrada.forEach(data => {
      if (data.id == id) {
        this.seleccionado = data.departureAddress + ' a ' + data.destinationAddress;
        return;
      }
    });
  }

  editar() {

  }

  ngOnInit() {

  }

}
