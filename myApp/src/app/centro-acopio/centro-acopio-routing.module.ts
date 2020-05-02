import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentroAcopioPage } from './centro-acopio.page';

const routes: Routes = [
  {
    path: '',
    component: CentroAcopioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentroAcopioPageRoutingModule {}
