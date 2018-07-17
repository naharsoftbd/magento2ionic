import {  Component, ViewChild } from '@angular/core';


import { NavController, MenuController, Slides,Platform } from 'ionic-angular';


import { SearchPage } from '../search/search';

 import { GoogleAnalytics } from '@ionic-native/google-analytics';
  
@Component({
	selector: 'home-page',
  templateUrl: 'home.html'
})

export class HomePage {

  // products: Product;
  @ViewChild('adSlider') slider: Slides;

  products: Array<any>;
  banners: String[];

  constructor(

    public navCtrl: NavController, 
    public menu: MenuController,

    public platform: Platform,
   private ga: GoogleAnalytics
 ) {



    this.banners = [
     'assets/imgs/ica-slidebox-img-1.png',
      'assets/imgs/ica-slidebox-img-2.png',
      'assets/imgs/ica-slidebox-img-1.png'
    ]


}



  trackEvent() {
    let active = this.slider.getActiveIndex();
    this.platform.ready().then(() => {
      this.ga.trackEvent("Slider", "Slider-Changed", "Label", active);
    });
  }



 

  search() {
    this.navCtrl.push(SearchPage);
  }

}
