import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScopeComponent } from './scope.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ScopeComponent],
  exports: [ScopeComponent]
})
export class ScopeComponentModule {}
