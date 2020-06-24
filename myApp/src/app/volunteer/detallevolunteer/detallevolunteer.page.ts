import { Component, OnInit } from '@angular/core';
import { VoluntariosService } from 'src/app/services/voluntarios/voluntarios.service';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from 'src/app/services/activity/activity.service';

@Component({
  selector: 'app-detallevolunteer',
  templateUrl: './detallevolunteer.page.html',
  styleUrls: ['./detallevolunteer.page.scss'],
})
export class DetallevolunteerPage implements OnInit {
  volunteer=[];
  id: string;
  activities;

  constructor(private activateRoute: ActivatedRoute,
              public voluntariosService: VoluntariosService,
              public activityService: ActivityService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const detallevolunteer = paramMap.get('id')
    
      this.voluntariosService.getVoluntarioId(detallevolunteer)
      .subscribe(
      (data)=>{this.volunteer=data},
      (error)=>{console.log(error);}
      )
    }); 

    this.activityService.getActivity()
    .subscribe(
    (data)=>{this.activities=data},
    (error)=>{console.log(error)}
    );

    

  }

}
