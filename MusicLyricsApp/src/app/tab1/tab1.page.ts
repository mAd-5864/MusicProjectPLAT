import { Component } from '@angular/core';
import { MusicapiService } from '../musicapi.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  track: any
  tracks: any;

  constructor(private MusicapiService: MusicapiService) { }

  ngOnInIt() {
    this.findTrack()
  }

  findTrack() {
    this.MusicapiService.findLyrics(this.track).subscribe(
      (data:any)=> {
        console.log(data)
         this.tracks = data.message.body.track_list
      }
    )
  }
}