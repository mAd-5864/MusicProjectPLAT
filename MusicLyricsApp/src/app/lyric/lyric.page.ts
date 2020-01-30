import { Component, OnInit } from '@angular/core';
import { MusicapiService } from '../musicapi.service';
import { ActivatedRoute } from '@angular/router';

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


  constructor(private MusicapiService: MusicapiService, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.track_id = params.get('id');
    });
    this.findTrackId()
  }

  findTrackId() {
    this.MusicapiService.findLyrics(this.track_id).subscribe(
      (data: any) => {
        console.log(data)
        this.lyric = data.message.body.lyrics.lyrics_body
        this.y = this.lyric.split(/\n/)
        console.log(this.y)   
      }
    )
    this.MusicapiService.findTrackName(this.track_id).subscribe(
      (data: any) => {
        console.log(data)
        this.trackName = data.message.body.track.track_name
        this.trackArtist = data.message.body.track.artist_name
      }
    )
  }
}