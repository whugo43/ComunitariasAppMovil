import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GruposDeApoyoPage } from './grupos-de-apoyo.page';

const routes: Routes = [
  {
    path: '',
    component: GruposDeApoyoPage
  },
  {
    path: 'grupos-de-apollo-registro',
    loadChildren: () => import('./grupos-de-apollo-registro/grupos-de-apollo-registro.module').then( m => m.GruposDeApolloRegistroPageModule)
  },
  {
    path: 'grupo-de-apoyo-detalles',
    loadChildren: () => import('./grupo-de-apoyo-detalles/grupo-de-apoyo-detalles.module').then( m => m.GrupoDeApoyoDetallesPageModule)
  },
  {
    path: 'grupo-de-apoyo-ingresar-miembros',
    loadChildren: () => import('./grupo-de-apoyo-ingresar-miembros/grupo-de-apoyo-ingresar-miembros.module').then( m => m.GrupoDeApoyoIngresarMiembrosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GruposDeApoyoPageRoutingModule {}
