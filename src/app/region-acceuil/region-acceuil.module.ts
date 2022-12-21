import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionAcceuilPageRoutingModule } from './region-acceuil-routing.module';

import { RegionAcceuilPage } from './region-acceuil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionAcceuilPageRoutingModule
  ],
  declarations: [RegionAcceuilPage]
})
export class RegionAcceuilPageModule {}
