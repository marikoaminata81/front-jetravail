import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutRegionPageRoutingModule } from './ajout-region-routing.module';

import { AjoutRegionPage } from './ajout-region.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutRegionPageRoutingModule
  ],
  declarations: [AjoutRegionPage]
})
export class AjoutRegionPageModule {}
