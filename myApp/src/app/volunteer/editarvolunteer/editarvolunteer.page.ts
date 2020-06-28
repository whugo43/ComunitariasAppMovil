import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { VoluntariosService } from 'src/app/services/voluntarios/voluntarios.service';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { LoginService } from 'src/app/services/login/login.service';
import { GrupoService } from 'src/app/services/grupo-service/grupo.service';

@Component({
  selector: 'app-editarvolunteer',
  templateUrl: './editarvolunteer.page.html',
  styleUrls: ['./editarvolunteer.page.scss'],
})
export class EditarvolunteerPage implements OnInit {

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
    username:''
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
    this.activityService.getActivity()
    .subscribe(
    (data)=>{this.activities=data},
    (error)=>{console.log(error)}
    );
  }

  UpDatevolunteer(){
    this.formDataUser.append('username', this.formularios.username);
    this.formDataUser.append('email', this.formularios.email);

    this.formDataVoluntario.append('firstName', this.formularios.firstName);
    this.formDataVoluntario.append('lastName',  this.formularios.lastName);
    this.formDataVoluntario.append('social', this.formularios.social);
    this.formDataVoluntario.append('schedule', this.formularios.schedule);
    this.formDataVoluntario.append('phoneNumber', this.formularios.phoneNumber);
    for (let index = 0; index <  this.formularios.activities.length; index++) {
      this.formDataVoluntario.append('activities',  this.formularios.activities[index]);      
    }


  }

}
