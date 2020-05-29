import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GruposDeApoyoPageRoutingModule } from './grupos-de-apoyo-routing.module';

import { GruposDeApoyoPage } from './grupos-de-apoyo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GruposDeApoyoPageRoutingModule
  ],
  declarations: [GruposDeApoyoPage]
})
export class GruposDeApoyoPageModule {}
