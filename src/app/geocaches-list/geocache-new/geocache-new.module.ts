import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeocacheNewPageRoutingModule } from './geocache-new-routing.module';

import { GeocacheNewPage } from './geocache-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeocacheNewPageRoutingModule
  ],
  declarations: [GeocacheNewPage]
})
export class GeocacheNewPageModule {}
