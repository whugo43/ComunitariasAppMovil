import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarContactoPageRoutingModule } from './editar-contacto-routing.module';

import { EditarContactoPage } from './editar-contacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarContactoPageRoutingModule
  ],
  declarations: [EditarContactoPage]
})
export class EditarContactoPageModule {}
