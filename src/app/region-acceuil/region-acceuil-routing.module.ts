import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionAcceuilPage } from './region-acceuil.page';

const routes: Routes = [
  {
    path: '',
    component: RegionAcceuilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionAcceuilPageRoutingModule {}
