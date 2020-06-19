import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonacionesPageRoutingModule } from './donaciones-routing.module';

import { DonacionesPage } from './donaciones.page';

import {DonacionComponent} from '../componentes/donacion/donacion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonacionesPageRoutingModule
  ],
  declarations: [DonacionesPage,  DonacionComponent],
  entryComponents:[DonacionComponent]

})
export class DonacionesPageModule {}
