import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeocachePage } from './geocache.page';

const routes: Routes = [
  {
    path: '',
    component: GeocachePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeocachePageRoutingModule {}
