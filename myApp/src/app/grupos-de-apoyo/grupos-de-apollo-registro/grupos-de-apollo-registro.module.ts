import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GruposDeApolloRegistroPageRoutingModule } from './grupos-de-apollo-registro-routing.module';

import { GruposDeApolloRegistroPage } from './grupos-de-apollo-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GruposDeApolloRegistroPageRoutingModule
  ],
  declarations: [GruposDeApolloRegistroPage]
})
export class GruposDeApolloRegistroPageModule {}
