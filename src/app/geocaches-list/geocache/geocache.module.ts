import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeocachePageRoutingModule } from './geocache-routing.module';

import { GeocachePage } from './geocache.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeocachePageRoutingModule
  ],
  declarations: [GeocachePage]
})
export class GeocachePageModule {}
