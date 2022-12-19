import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeUserPage } from './liste-user.page';

const routes: Routes = [
  {
    path: '',
    component: ListeUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeUserPageRoutingModule {}
