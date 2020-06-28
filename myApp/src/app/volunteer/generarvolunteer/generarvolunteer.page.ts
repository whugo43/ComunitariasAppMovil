import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { VoluntariosService } from 'src/app/services/voluntarios/voluntarios.service';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { LoginService } from 'src/app/services/login/login.service';
import { GrupoService } from 'src/app/services/grupo-service/grupo.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-generarvolunteer',
  templateUrl: './generarvolunteer.page.html',
  styleUrls: ['./generarvolunteer.page.scss'],
})
export class GenerarvolunteerPage implements OnInit {
  voluntarios;
  gruposApoyos;
  activities;
  idcreador: string;
  formularios={
    activities:[], 
    firstName: '',
    lastName: '',
    social:'',
    schedule:'',
    phoneNumber:'',
    email:'',
    username:'',
    password:''
    }

    formDataUser = new FormData();
    formDataVoluntario = new FormData();

  constructor(public router: Router,
              public alertController: AlertController,
              public voluntariosService: VoluntariosService,
              public activityService: ActivityService,
              private conexionUser: LoginService,
              public gruposervice: GrupoService) { }

  ngOnInit() {
    this.idcreador=this.conexionUser.getUserIdLogin();
    this.gruposervice.getGrupo()
    .subscribe(
    (data)=>{this.gruposApoyos=data;
      for (const iterator of this.gruposApoyos) {
        if (this.idcreador == iterator.user){
          this.formDataUser.append("createdBy", iterator.name)
          this.formDataVoluntario.append("createdBy", iterator.name)
        }
      }
    },
    (error)=>{console.log(error)}
    );

    this.voluntariosService.getVoluntarios()
    .subscribe(
    (data)=>{this.voluntarios=data;
      for (const iterator of this.voluntarios) {
        if (this.idcreador == iterator.user){
          this.formDataVoluntario.append("createdBy", iterator.firstName+" "+iterator.lastName)
          this.formDataUser.append("createdBy", iterator.firstName+" "+iterator.lastName)
        }
      }
    },
    (error)=>{console.log(error)}
    );


    this.activityService.getActivity()
    .subscribe(
    (data)=>{this.activities=data},
    (error)=>{console.log(error)}
    );

  }

  postvolunteer(){
    this.formDataUser.append('username', this.formularios.username);
    this.formDataUser.append('password', this.formularios.password);
    this.formDataUser.append('email', this.formularios.email);

    this.formDataVoluntario.append('firstName', this.formularios.firstName);
    this.formDataVoluntario.append('lastName',  this.formularios.lastName);
    this.formDataVoluntario.append('social', this.formularios.social);
    this.formDataVoluntario.append('schedule', this.formularios.schedule);
    this.formDataVoluntario.append('phoneNumber', this.formularios.phoneNumber);
   
    for (let index = 0; index <  this.formularios.activities.length; index++) {
      this.formDataVoluntario.append('activities',  this.formularios.activities[index]);      
    }
    
    this.conexionUser.guardarUsuario(this.formDataUser).subscribe(
      (data) => {
        this.formDataVoluntario.append('user', data['id']);
        this.voluntariosService.postVoluntario(this.formDataVoluntario).subscribe(
          newTask => {
            console.log(newTask);
            this.router.navigateByUrl('/volunteer');
          },
          error => {
            console.log(error);
          }
        );
      },
      error => {
        console.log(error);
        this.presentAlert('El nombre del usuario o correo ya existe, por favor <strong>eliga otro nombre</strong>');
      });
  }

  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: 'Especificacion del error',
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();
  }


}
