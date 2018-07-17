import { Component } from '@angular/core';
import { NavController, PopoverController, ModalController, AlertController } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail';
import { ProductsFilterPage } from '../products-filter/products-filter';
import { SearchPage } from '../search/search';
import { Product } from '../../Product.interface';
import { DataService } from '../../providers/data-service';
import { MagentoService } from '../../providers/magento-service';
// interface Product {
//   name: string;
//   image: string;
//   rating: number;
//   price: number;
// }

@Component({
  templateUrl: 'products.html',
})

export class ProductsPage {
  
  Products: Product[];
  datas: Product[];
  constructor(
    public navCtrl: NavController, 
    public popoverCtrl: PopoverController, 
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public dataservice:DataService,
    public mageservice: MagentoService
  ) {



      this.dataservice.getProducts()
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



  search() {
    this.navCtrl.push(SearchPage);
  }

  goToProductDetail(data:any) {
    //console.log(data);
    this.navCtrl.push(ProductDetailPage,{
      productData: data,
    });
  }

  presentFilter() {
    let modal = this.modalCtrl.create(ProductsFilterPage);
    modal.present();

    modal.onDidDismiss((data: any[]) => {
      if (data) {
        console.log(data);
      }
    });
  }

  sortBy() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Sort Options');

    alert.addInput({
      type: 'radio',
      label: 'Relevance',
      value: 'relevance',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Low to High',
      value: 'lth'
    });
    alert.addInput({
      type: 'radio',
      label: 'High to Low',
      value: 'htl'
    });
    alert.addInput({
      type: 'radio',
      label: 'Newest First',
      value: 'newest'
    });

    alert.addButton('Cancel');

    alert.addButton({
      text: 'OK',
      handler: (data: any) => {
        console.log(data);


   this.dataservice.getsortedProducts(data)
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
        
    console.log(this.Products);
        },
          
        (error: Response) => {
          
          
          if (error.status === 401) {
            console.log('Api Error');
            

          }
        }
      
      );

      }
    });

    alert.present().then(() => {
     // console.log(alert.data);
    });



//console.log();


  }

}
