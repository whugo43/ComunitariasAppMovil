import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsPageRoutingModule } from './contacts-routing.module';


import { ContactsPage } from './contacts.page';

import {DonacionComponent} from '../componentes/donacion/donacion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsPageRoutingModule,
    
  ],
  declarations: [ContactsPage, DonacionComponent],
  entryComponents:[DonacionComponent]
})
export class ContactsPageModule {}
