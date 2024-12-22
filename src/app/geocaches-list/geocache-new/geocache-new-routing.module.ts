import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeocacheNewPage } from './geocache-new.page';

const routes: Routes = [
  {
    path: '',
    component: GeocacheNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeocacheNewPageRoutingModule {}
