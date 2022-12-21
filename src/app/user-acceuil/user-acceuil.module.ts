import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAcceuilPageRoutingModule } from './user-acceuil-routing.module';

import { UserAcceuilPage } from './user-acceuil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAcceuilPageRoutingModule
  ],
  declarations: [UserAcceuilPage]
})
export class UserAcceuilPageModule {}
