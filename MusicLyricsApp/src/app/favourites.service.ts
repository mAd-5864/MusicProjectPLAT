import { Injectable } from '@angular/core';
import { NgForOf } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  favouriteList = []

  constructor() { }

  addToFavourites(obj) {
    for (let i = 0; i <= this.favouriteList.length; i++) {
      if (i>0 && Object.values(this.favouriteList[i-1])[2] === Object.values(obj)[2]) {
        document.getElementById('favouriteBtn').innerHTML = 'Add'
        this.favouriteList.splice(i-1, 1)
        break
      } else {
        document.getElementById('favouriteBtn').innerHTML = 'Remove'
        if (i===this.favouriteList.length) {
          this.favouriteList.push(obj)
          break
        }
      }
    }
    console.log(this.favouriteList);
  }

  getFavouriteList() {
    return this.favouriteList
  }
}
