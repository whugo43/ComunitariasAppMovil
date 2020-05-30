import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolunteerPage } from './volunteer.page';

const routes: Routes = [
  {
    path: '',
    component: VolunteerPage
  },
  {
    path: 'generarvolunteer',
    loadChildren: () => import('./generarvolunteer/generarvolunteer.module').then( m => m.GenerarvolunteerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolunteerPageRoutingModule {}
