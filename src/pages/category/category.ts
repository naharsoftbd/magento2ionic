import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { SearchPage } from '../search/search';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
	
	category: any = [];
	products: any = [];

  constructor(public commonProvider: CommonProvider, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
	  this.category = this.navParams.get('category');
	  console.log(this.category);
  }

  ionViewDidLoad() {
    
  }
  
  getProducts(subcategory){
	  if(subcategory.children_data.length){
	    const categoryView = this.modalCtrl.create(CategoryPage, { category: subcategory.children_data });
		categoryView.present();
	  }else{
		 this.commonProvider.getProductsByCategory(subcategory.id).subscribe((products) => {
				this.products = products.items;
				this.navCtrl.push(SearchPage, {
				  'Products': products.items
				});
				
		});
		//console.log(subcategory.id);
		//this.viewCtrl.dismiss();
	  }
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }

}
