import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScopeComponent } from './scope.component';
import { ScopePagePage } from '../scope/scope-page/scope-page.page';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ScopeComponent,ScopePagePage],
  exports: [ScopeComponent],
  entryComponents:[ScopePagePage]
})
export class ScopeComponentModule {}
