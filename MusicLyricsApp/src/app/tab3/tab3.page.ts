import { Component } from '@angular/core';
import { FavouritesService } from '../favourites.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  favouriteList = []

  constructor(private FavouritesService:FavouritesService) {}

  ngOnInit() {
    this.favouriteList = this.FavouritesService.getFavouriteList()
    console.log(this.favouriteList)
  }
}
