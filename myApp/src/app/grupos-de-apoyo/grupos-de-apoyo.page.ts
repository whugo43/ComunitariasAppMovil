import { Component, OnInit } from '@angular/core';
import { Grupo } from '../clases/grupo/grupo'
import { GrupoService } from '../services/grupo-service/grupo.service'
import { LoginService } from '../services/login/login.service'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grupos-de-apoyo',
  templateUrl: './grupos-de-apoyo.page.html',
  styleUrls: ['./grupos-de-apoyo.page.scss'],
})
export class GruposDeApoyoPage implements OnInit {
  private gruposDeApoyo: Grupo[] = [];
  private seleccionado: string = '';

  constructor(private apiGrupoApoyo: GrupoService, private apiUser: LoginService,
    private alertController:AlertController,private router:Router) { }

  async presentAlertConfirm(id:any) {
    this.obtenerNombre(id);
    let alert = await this.alertController.create({
      header: 'Confirmación!',
      message: '<p>Esta seguro que desea eliminar: <strong>'+this.seleccionado+'</strong>!!!</p>',
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
            this.apiGrupoApoyo.deleteGrupo(id);
          }
        }
      ]
    });
    await alert.present();
  }

  obtenerNombre(id:string){
   this.gruposDeApoyo.forEach(grupo=>{
     if(grupo.id==id){
        this.seleccionado=grupo.name;
     }
   });
  }

  obtenerGruposdeapoyo() {
    this.gruposDeApoyo=[];
    this.apiGrupoApoyo.getGrupo().subscribe(grupos => {
      grupos.forEach(grupo => {
        this.apiUser.getLogins().subscribe(users => {
          users.forEach(user => {
            if (user.id == grupo.user) {
              grupo.nombreuser = user.username;
              return;
            }
          });
        });
        this.gruposDeApoyo.push(grupo);
      });
    });
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 200);
  }

  ngOnInit() {
    this.obtenerGruposdeapoyo();
    console.log(this.gruposDeApoyo);
  }

  goDetails(id:string){
    this.router.navigate(['./grupos-de-apoyo/grupo-de-apoyo-detalles'], {
      queryParams: {
        idGrupo:id
      }
    })
  }


}
