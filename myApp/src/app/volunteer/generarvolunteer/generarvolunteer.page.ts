import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { VoluntariosService } from 'src/app/services/voluntarios/voluntarios.service';
import { ActivityService } from 'src/app/services/activity/activity.service';
@Component({
  selector: 'app-generarvolunteer',
  templateUrl: './generarvolunteer.page.html',
  styleUrls: ['./generarvolunteer.page.scss'],
})
export class GenerarvolunteerPage implements OnInit {
  activities;
  users;
  formData= new FormData();
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

  constructor(public alertController: AlertController,
              public voluntariosService: VoluntariosService,
              public activityService: ActivityService) { }

  ngOnInit() {
    this.activityService.getActivity()
    .subscribe(
    (data)=>{this.activities=data},
    (error)=>{console.log(error)}
    );
  }

  postvolunteer(){

  }

}
