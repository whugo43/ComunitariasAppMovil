import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProveedorPage } from './proveedor.page';

const routes: Routes = [
  {
    path: '',
    component: ProveedorPage
  },
  {
    path: 'detalle-proveedor',
    loadChildren: () => import('./detalle-proveedor/detalle-proveedor.module').then( m => m.DetalleProveedorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProveedorPageRoutingModule {}
