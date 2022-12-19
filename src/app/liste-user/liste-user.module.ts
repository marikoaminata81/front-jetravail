import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeUserPageRoutingModule } from './liste-user-routing.module';

import { ListeUserPage } from './liste-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeUserPageRoutingModule
  ],
  declarations: [ListeUserPage]
})
export class ListeUserPageModule {}
