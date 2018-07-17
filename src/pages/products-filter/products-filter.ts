import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-products-filter',
  templateUrl: 'products-filter.html'
})
export class ProductsFilterPage {
  filters: Array<any> = [];

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {

    this.filters = [
      { 
        "name":"Best Sold",
        "isChecked":false
      },
      { 
        "name":"All",
        "isChecked":true
      }
    ];
    
  }

  resetFilters() {
    // reset all of the toggles to be checked
    this.filters.forEach(track => {
      track.isChecked = false;
    });
  }

  applyFilters() {
    // Pass back a new array of track names to exclude
    this.dismiss();
  }

  dismiss(data?: any) {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss(data);
  }
}
