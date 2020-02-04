import { Injectable } from '@angular/core';
import { NgForOf } from '@angular/common';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  favouriteList = []

  constructor(private nativeStorage: NativeStorage) { }

  addToFavourites(obj) {
    for (let i = 0; i <= this.favouriteList.length; i++) {
      if (i>0 && Object.values(this.favouriteList[i-1])[2] === Object.values(obj)[2]) {
        document.getElementById('favouriteBtn').innerHTML = '<ion-icon name="heart-empty" slot="end"></ion-icon>'
        this.favouriteList.splice(i-1, 1)
        break
      } else {
        document.getElementById('favouriteBtn').innerHTML = '<ion-icon name="heart" slot="end"></ion-icon>'
        if (i===this.favouriteList.length) {
          this.favouriteList.push(obj)
          break
        }
      }
    }
    console.log(this.favouriteList);
  }
  updateFavourite(obj) {
    for (let i = 0; i <= this.favouriteList.length; i++) {
      if (i>0 && Object.values(this.favouriteList[i-1])[2] === Object.values(obj)[2]) {
        document.getElementById('favouriteBtn').innerHTML = '<ion-icon name="heart" slot="end"></ion-icon>'
        break
      } else {
        document.getElementById('favouriteBtn').innerHTML = '<ion-icon name="heart-empty" slot="end"></ion-icon>'
        if (i===this.favouriteList.length) {
          break
        }
      }
    }
    console.log(this.favouriteList);
  }

  getFavouriteList() {
    return this.favouriteList
  }

  nativeStorageGet(){
    return this.nativeStorage.getItem('favouriteList')
  }

    nativeStorageSet(storage){
      this.nativeStorage.setItem('favouriteList', storage)
    }
}
