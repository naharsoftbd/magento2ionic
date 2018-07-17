import { Component } from '@angular/core';
import { NavController, PopoverController, ToastController, NavParams } from 'ionic-angular';

import { SearchPage } from '../search/search';


@Component({
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {

  productData: any;

  constructor(
    public navCtrl: NavController, 
    public popoverCtrl: PopoverController, 
    public toastCtrl: ToastController,
    public _params:NavParams) {

    this.productData = _params.get('productData');
    console.log(this.productData);
  }



 



  search() {
    this.navCtrl.push(SearchPage);
  }

}
