import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'lyric/:id',
    loadChildren: () => import('./lyric/lyric.module').then( m => m.LyricPageModule)
  },
  {
    path: 'music-by-genre/:id',
    loadChildren: () => import('./music-by-genre/music-by-genre.module').then( m => m.MusicByGenrePageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
