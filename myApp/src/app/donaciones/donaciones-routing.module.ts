import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonacionesPage } from './donaciones.page';

const routes: Routes = [
  {
    path: '',
    component: DonacionesPage
  },
  {
    path: 'generar-donacion',
    loadChildren: () => import('./generar-donacion/generar-donacion.module').then( m => m.GenerarDonacionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonacionesPageRoutingModule {}
