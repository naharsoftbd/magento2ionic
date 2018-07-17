import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { CategoryPage } from '../category/category';
import { SearchPage } from '../search/search';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
	
	categories: any = []
    loading: any;
	childcategories: any = [];
	childcategoriesid: any = [];
	products: any = [];

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams,public commonProvider: CommonProvider,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
		this.commonProvider.getCategories().subscribe((categories) => {
				this.categories = categories;
				//console.log(categories.children_data[0].is_active);
		});
  }
  
 viewChildCategory(category){
	if(category.children_data.length){	
	 const categoryView = this.modalCtrl.create(CategoryPage, { category: category.children_data });
     categoryView.present();
	}else {
	 this.commonProvider.getProductsByCategory(category.id).subscribe((products) => {
				this.products = products.items;
				this.navCtrl.push(SearchPage, {
				  'Products': products.items
				});
				
		});
	}
  }

}

