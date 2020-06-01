import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScopePagePage } from './scope-page.page';

const routes: Routes = [
  {
    path: '',
    component: ScopePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScopePagePageRoutingModule {}
