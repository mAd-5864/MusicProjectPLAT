import { Component, OnInit } from '@angular/core';
import { MusicapiService } from '../musicapi.service';
import { ActivatedRoute } from '@angular/router';
import { FavouritesService } from '../favourites.service';


@Component({
  selector: 'app-lyric',
  templateUrl: './lyric.page.html',
  styleUrls: ['./lyric.page.scss'],
})
export class LyricPage implements OnInit {

  track_id: any
  lyric: any
  y: any
  trackName: any
  trackArtist: any
  storage: any


  constructor(private MusicapiService: MusicapiService, private route: ActivatedRoute, private FavouritesService: FavouritesService) {  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.track_id = params.get('id');
    });
    this.findTrackId();
    this.updateFavouriteButton();
    this.nativeStorageGet()
  }

  findTrackId() {
    this.MusicapiService.findLyrics(this.track_id).subscribe(
      (data: any) => {
        this.lyric = data.message.body.lyrics.lyrics_body
        this.y = this.lyric.split(/\n/)
      }
    )
    this.MusicapiService.findTrackName(this.track_id).subscribe(
      (data: any) => {
        this.trackName = data.message.body.track.track_name
        this.trackArtist = data.message.body.track.artist_name
      }
    )
  }
  updateFavouriteButton() {
    this.FavouritesService.updateFavourite({ track_name: this.trackName, track_artist: this.trackArtist, track_id: this.track_id })
  }


  addToFavouriteList() {
    this.FavouritesService.addToFavourites({ track_name: this.trackName, track_artist: this.trackArtist, track_id: this.track_id })
    this.nativeStorageSet()
  }

  nativeStorageGet(){
    this.storage = this.FavouritesService.nativeStorageGet()
  }

  nativeStorageSet(){
    this.FavouritesService.nativeStorageSet(this.storage)
    this.storage = this.FavouritesService.nativeStorageGet()
  }

  
  
  
}