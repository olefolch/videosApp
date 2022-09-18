import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SortePage } from './sorte.page';

const routes: Routes = [
  {
    path: '',
    component: SortePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SortePageRoutingModule {}
