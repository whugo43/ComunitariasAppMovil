import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentroAcopioPage } from './centro-acopio.page';

const routes: Routes = [
  {
    path: '',
    component: CentroAcopioPage
  },  {
    path: 'ubicacion',
    loadChildren: () => import('./ubicacion/ubicacion.module').then( m => m.UbicacionPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentroAcopioPageRoutingModule {}
