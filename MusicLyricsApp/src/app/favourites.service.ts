import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  favouriteList = []

  constructor() { }

  addToFavourites(obj) {
    console.log(obj)
    this.favouriteList.push(obj)
    console.log("-----------");
    console.log(this.favouriteList);
  }

  getFavouriteList(){
    return this.favouriteList
  }
}
 