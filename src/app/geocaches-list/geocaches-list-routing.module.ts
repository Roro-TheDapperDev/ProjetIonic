import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeocachesListPage } from './geocaches-list.page';

const routes: Routes = [

  // toutes les routes doivent être correctement définies sinon sur le tab, on ne pourra pas naviguer
  {
    path: '',
    component: GeocachesListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./geocache-new/geocache-new.module').then( m => m.GeocacheNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./geocache/geocache.module').then( m => m.GeocachePageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeocachesListPageRoutingModule {}
