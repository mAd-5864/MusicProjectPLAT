import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MusicapiService {

  constructor(private http: HttpClient) { }

  findLyrics(track) {
    // return this.http.get("https://api.musixmatch.com/ws/1.1/track.search?format=json&callback=jsonp&q_track=" + track + "&quorum_factor=1&apikey=e3edc248939ca19a3546f63ca83b24ab")
    return this.http.get("https://api.musixmatch.com/ws/1.1/music.genres.get?format=json&callback=jsonp&q_track=" + track + "&quorum_factor=1&apikey=e3edc248939ca19a3546f63ca83b24ab")
  }

  findGenres(genre) {
    return this.http.get("https://api.musixmatch.com/ws/1.1/?format=json&callback=jsonp&q_track=" + genre + "&quorum_factor=1&apikey=e3edc248939ca19a3546f63ca83b24ab")
  }
}