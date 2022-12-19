import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeRegionPageRoutingModule } from './liste-region-routing.module';

import { ListeRegionPage } from './liste-region.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeRegionPageRoutingModule
  ],
  declarations: [ListeRegionPage]
})
export class ListeRegionPageModule {}
