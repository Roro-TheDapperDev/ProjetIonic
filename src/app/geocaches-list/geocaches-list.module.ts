import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeocachesListPageRoutingModule } from './geocaches-list-routing.module';

import { GeocachesListPage } from './geocaches-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeocachesListPageRoutingModule
  ],
  declarations: [GeocachesListPage]
})
export class GeocachesListPageModule {}
