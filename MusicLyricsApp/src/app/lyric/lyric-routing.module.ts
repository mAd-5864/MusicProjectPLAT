import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LyricPage } from './lyric.page';

const routes: Routes = [
  {
    path: '',
    component: LyricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LyricPageRoutingModule {}
