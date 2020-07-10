import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaContactosPageRoutingModule } from './lista-contactos-routing.module';

import { ListaContactosPage } from './lista-contactos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaContactosPageRoutingModule
  ],
  declarations: [ListaContactosPage]
})
export class ListaContactosPageModule {}
