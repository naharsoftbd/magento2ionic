import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
//import { CategoryPage } from '../category/category';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
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
		console.log(subcategory);
	  }
  }

}
