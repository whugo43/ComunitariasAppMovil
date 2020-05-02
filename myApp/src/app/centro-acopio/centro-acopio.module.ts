import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentroAcopioPageRoutingModule } from './centro-acopio-routing.module';

import { CentroAcopioPage } from './centro-acopio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentroAcopioPageRoutingModule
  ],
  declarations: [CentroAcopioPage]
})
export class CentroAcopioPageModule {}
