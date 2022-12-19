import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsRegionPageRoutingModule } from './details-region-routing.module';

import { DetailsRegionPage } from './details-region.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsRegionPageRoutingModule
  ],
  declarations: [DetailsRegionPage]
})
export class DetailsRegionPageModule {}
