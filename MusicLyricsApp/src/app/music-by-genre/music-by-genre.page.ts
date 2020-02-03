import { Component, OnInit } from '@angular/core';
import { MusicapiService } from '../musicapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-music-by-genre',
  templateUrl: './music-by-genre.page.html',
  styleUrls: ['./music-by-genre.page.scss'],
})
export class MusicByGenrePage implements OnInit {
    
    music_genre_id: any
    tracks: any
    genreName: any


  constructor(private MusicapiService: MusicapiService, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.music_genre_id = params.get('id');
    });
    this.findTrackId()
  }
  findTrackId() {
    this.MusicapiService.findTrackByGenre(this.music_genre_id).subscribe(
      (data: any) => {
        console.log(data)
        this.tracks = data.message.body.track_list
        this.genreName  = data.message.body.track_list[0].track.primary_genres.music_genre_list[0].music_genre.music_genre_name
      }
    )
  }
}
