import { Component } from '@angular/core';
import { MusicapiService } from '../musicapi.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  genres = [];
  searchText = "Blues"

  constructor(private MusicapiService: MusicapiService) { }

  ngOnInit() {
    this.findGenres()
  }

  findGenres() {
    this.MusicapiService.findGenres().subscribe(
      (data: any) => {
        console.log(data)
        this.genres = data.message.body.music_genre_list
        console.log(this.genres[0])
      }
    )
  }
}