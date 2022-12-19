import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutRegionPage } from './ajout-region.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutRegionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutRegionPageRoutingModule {}
