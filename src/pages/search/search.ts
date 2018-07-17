import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { Product } from '../../Product.interface';
import { DataService } from '../../providers/data-service';
import { MagentoService } from '../../providers/magento-service';
import { ProductDetailPage } from '../product-detail/product-detail';


@Component({
  templateUrl: 'search.html',
})
export class SearchPage {
  
  //queryText = '';
      Products: Product[];
  constructor(private navCtrl: NavController,     
    public dataservice:DataService,
    public mageservice: MagentoService, public navParams: NavParams ) {
		
		this.Products = this.navParams.get('Products');
		console.log(this.Products);
		

  }

  updateSchedule() {
      
  }

getItems(ev: any){
  let val = ev.target.value;
//this.queryText=value;
  if(typeof(val) !== "undefined"){
    
  if( val.length>=2){


    this.dataservice.getSearchedProducts(val)
      .subscribe(
        (Products: Product[]) => {
          //this.Products = Products;

         


                    Products.forEach((product: any) => {
          product.custom_attributes.forEach((attr: any) => {
            if (attr.attribute_code === 'small_image') {
              if(attr.value!=''){
                 product.imgSrc = this.mageservice.baseUrl + 'pub/media/catalog/product' + attr.value;
               }else{
                 product.imgSrc = 'assets/imgs/default_product.png';
               }
             
              // console.log(product.imgSrc);
            }

           product.isAdding = false;


          });




        });

        

        this.Products=Products;
        

        },
          
        (error: Response) => {
          
          
          if (error.status === 401) {
            alert('Api Error');
            

          }
        }


      
      );



}

}

}



  goToProductDetail(data:any) {
    //console.log(data);
    this.navCtrl.push(ProductDetailPage,{
      productData: data,
    });
  }


}




