import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistribucionPage } from './distribucion.page';

const routes: Routes = [
  {
    path: '',
    component: DistribucionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistribucionPageRoutingModule {}
