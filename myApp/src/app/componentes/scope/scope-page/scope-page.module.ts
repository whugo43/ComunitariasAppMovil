import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScopePagePageRoutingModule } from './scope-page-routing.module';

import { ScopePagePage } from './scope-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScopePagePageRoutingModule
  ],
  declarations: [ScopePagePage]
})
export class ScopePagePageModule {}
