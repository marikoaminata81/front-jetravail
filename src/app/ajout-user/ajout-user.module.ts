import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutUserPageRoutingModule } from './ajout-user-routing.module';

import { AjoutUserPage } from './ajout-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutUserPageRoutingModule
  ],
  declarations: [AjoutUserPage]
})
export class AjoutUserPageModule {}
