import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SortePageRoutingModule } from './sorte-routing.module';

import { SortePage } from './sorte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SortePageRoutingModule
  ],
  declarations: [SortePage]
})
export class SortePageModule {}
