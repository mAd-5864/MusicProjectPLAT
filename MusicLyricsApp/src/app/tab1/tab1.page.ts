import { Component } from '@angular/core';
import { MusicapiService } from '../musicapi.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  track = "Yummy";
  tracks: any;

  constructor(private MusicapiService: MusicapiService) { }

  ngOnInIt() {
    this.findTrackName()
  }

  findTrackName() {
    this.MusicapiService.findTrack(this.track).subscribe(
      (data: any) => {
        console.log(data)
        this.tracks = data.message.body.track_list
      }
    )
  }
}