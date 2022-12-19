import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsRegionPage } from './details-region.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsRegionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsRegionPageRoutingModule {}
