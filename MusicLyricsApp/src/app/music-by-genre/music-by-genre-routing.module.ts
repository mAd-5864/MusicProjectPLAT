import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicByGenrePage } from './music-by-genre.page';

const routes: Routes = [
  {
    path: '',
    component: MusicByGenrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicByGenrePageRoutingModule {}
