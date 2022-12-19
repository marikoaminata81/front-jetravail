import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeRegionPage } from './liste-region.page';

const routes: Routes = [
  {
    path: '',
    component: ListeRegionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeRegionPageRoutingModule {}
