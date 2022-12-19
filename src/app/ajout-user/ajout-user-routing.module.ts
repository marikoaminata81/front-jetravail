import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutUserPage } from './ajout-user.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutUserPageRoutingModule {}
