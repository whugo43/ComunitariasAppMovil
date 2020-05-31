import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarCampaignPageRoutingModule } from './editar-campaign-routing.module';

import { EditarCampaignPage } from './editar-campaign.page';

import { ScopeComponentModule } from '../../componentes/scope/scope.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScopeComponentModule,
    EditarCampaignPageRoutingModule
  ],
  declarations: [EditarCampaignPage]
})
export class EditarCampaignPageModule {}
