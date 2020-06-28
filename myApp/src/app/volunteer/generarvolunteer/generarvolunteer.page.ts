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
    console.log("hugo")
    let formDataUser = new FormData();
    formDataUser.append('username', this.formularios.username);
    formDataUser.append('password', this.formularios.password);
    formDataUser.append('email', this.formularios.email);
    formDataUser.append('createdBy', 'mi');
    console.log(this.formularios.username);
    console.log(this.formularios.password);
    console.log(this.formularios.email);


    

  }

}
