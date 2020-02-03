import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class MusicapiService {

  constructor(private http: HttpClient) { }

  findTrack(track) {
    return this.http.get("https://api.musixmatch.com/ws/1.1/track.search?format=json&callback=jsonp&q_track=" + track + "&f_has_lyrics=1&page_size=20&s_track_rating=desc&quorum_factor=1&apikey=e3edc248939ca19a3546f63ca83b24ab")
  }

  findGenres() {
    return this.http.get("https://api.musixmatch.com/ws/1.1/music.genres.get?format=json&callback=jsonp&quorum_factor=1&f_has_lyrics=1&apikey=e3edc248939ca19a3546f63ca83b24ab")
  }

  findLyrics(track_id) {
    return this.http.get("https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=json&callback=jsonp&track_id="  + track_id + "&apikey=e3edc248939ca19a3546f63ca83b24ab")
  }
  findTrackName(track_id) {
    return this.http.get("https://api.musixmatch.com/ws/1.1/track.get?format=json&callback=callback&track_id=" + track_id + "&apikey=e3edc248939ca19a3546f63ca83b24ab")
  }

  findTrackByGenre(genre_id) {
    return this.http.get("https://api.musixmatch.com/ws/1.1/track.search?format=json&callback=jsonp&f_music_genre_id=" + genre_id +"&f_has_lyrics=1&page_size=20&s_track_rating=desc&quorum_factor=1&apikey=e3edc248939ca19a3546f63ca83b24ab")
  }
}