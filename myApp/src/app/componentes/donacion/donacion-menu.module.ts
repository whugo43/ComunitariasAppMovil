import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonacionComponent } from './donacion.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [DonacionComponent],
  exports: [DonacionComponent],
  entryComponents:[]
})
export class DonacionComponentModule {}