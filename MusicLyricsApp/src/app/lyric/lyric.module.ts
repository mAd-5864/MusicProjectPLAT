import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LyricPageRoutingModule } from './lyric-routing.module';

import { LyricPage } from './lyric.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LyricPageRoutingModule
  ],
  declarations: [LyricPage]
})
export class LyricPageModule {}
