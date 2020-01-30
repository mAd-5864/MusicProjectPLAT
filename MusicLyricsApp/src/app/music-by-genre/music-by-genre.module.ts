import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicByGenrePageRoutingModule } from './music-by-genre-routing.module';

import { MusicByGenrePage } from './music-by-genre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicByGenrePageRoutingModule
  ],
  declarations: [MusicByGenrePage]
})
export class MusicByGenrePageModule {}
