import { Component } from '@angular/core';
import { FavouritesService } from '../favourites.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  favouriteList: any;

  constructor(private FavouritesService: FavouritesService) {}

  ngOnInit() {
    this.nativeStorageGet()
    this.favouriteList = this.FavouritesService.getFavouriteList()
    console.log(this.favouriteList)
  }

  nativeStorageGet(){
    this.favouriteList = this.FavouritesService.nativeStorageGet()
  }
}
