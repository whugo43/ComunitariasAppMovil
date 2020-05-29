import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GruposDeApolloRegistroPage } from './grupos-de-apollo-registro.page';

const routes: Routes = [
  {
    path: '',
    component: GruposDeApolloRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GruposDeApolloRegistroPageRoutingModule {}
