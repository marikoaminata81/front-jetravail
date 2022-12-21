import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAcceuilPage } from './user-acceuil.page';

const routes: Routes = [
  {
    path: '',
    component: UserAcceuilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAcceuilPageRoutingModule {}
