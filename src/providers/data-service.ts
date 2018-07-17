import { Http, Headers, Response,RequestOptions,URLSearchParams } from '@angular/http';
//import {MagentoService} from './magento-service';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { ACCESS_TOKEN,API_URL } from './constants';
  

import { Product } from '../Product.interface';



@Injectable()
export class DataService {
    //private access_token:string;
  api_url = API_URL;
  access_token=ACCESS_TOKEN;
    Products: Product[];
  
  cartItems: any[];
  loading: any;


    

 
  

  constructor( private _http: Http) {
 //   var self = this;
      
       //   var data=JSON.parse(sessionStorage.getItem('api'));
     // this.access_token=data['apitoken'];
  }


  getProducts() {
             
              var search = new URLSearchParams();
    search.set('searchCriteria[filter_groups][0][filters][0][field]', 'visibility');
    search.set('searchCriteria[filter_groups][0][filters][0][value]', '4');

    search.set('searchCriteria[filter_groups][1][filters][0][field]', 'type_id');
    search.set('searchCriteria[filter_groups][1][filters][0][value]', 'simple');
    search.set('searchCriteria[filter_groups][1][filters][1][field]', 'type_id');
    search.set('searchCriteria[filter_groups][1][filters][1][value]', 'downloadable');

    search.set('searchCriteria[filter_groups][2][filters][0][field]', 'status');
    search.set('searchCriteria[filter_groups][2][filters][0][value]', '1');

    search.set('searchCriteria[pageSize]', '50');
    search.set('searchCriteria[currentPage]', '1');


      let headers = new Headers({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
         'Authorization': 'Bearer '+this.access_token
      });
      let options = new RequestOptions({headers: headers, search: search});


     return this._http.get(this.api_url+'products', options)
 
         .map(
        (response: Response) => {
         // console.log(response);
            return response.json().items;
        }
        );
       }










   getSearchedProducts(queryText) {
             
              var search = new URLSearchParams();
console.log(queryText);


   
      search.set('searchCriteria[filter_groups][0][filters][0][field]', 'name');
    search.set('searchCriteria[filter_groups][0][filters][0][value]', '%'+queryText+'%');

search.set('searchCriteria[filter_groups][0][filters][0][condition_type]', 'like');

       search.set('searchCriteria[filter_groups][0][filters][1][field]', 'sku');
    search.set('searchCriteria[filter_groups][0][filters][1][value]', '%'+queryText+'%');

search.set('searchCriteria[filter_groups][0][filters][1][condition_type]', 'like');



       search.set('searchCriteria[filter_groups][0][filters][2][field]', 'url_key');
    search.set('searchCriteria[filter_groups][0][filters][2][value]', '%'+queryText+'%');

search.set('searchCriteria[filter_groups][0][filters][2][condition_type]', 'like');


       search.set('searchCriteria[filter_groups][0][filters][3][field]', 'description');
    search.set('searchCriteria[filter_groups][0][filters][3][value]', '%'+queryText+'%');

search.set('searchCriteria[filter_groups][0][filters][2][condition_type]', 'like');

    search.set('searchCriteria[filter_groups][1][filters][0][field]', 'visibility');
    search.set('searchCriteria[filter_groups][1][filters][0][value]', '4');

    search.set('searchCriteria[filter_groups][2][filters][0][field]', 'type_id');
    search.set('searchCriteria[filter_groups][2][filters][0][value]', 'simple');
    search.set('searchCriteria[filter_groups][2][filters][1][field]', 'type_id');
    search.set('searchCriteria[filter_groups][2][filters][1][value]', 'downloadable');

    search.set('searchCriteria[filter_groups][3][filters][0][field]', 'status');
    search.set('searchCriteria[filter_groups][3][filters][0][value]', '1');

    search.set('searchCriteria[pageSize]', '50');
    search.set('searchCriteria[currentPage]', '1');


      let headers = new Headers({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+this.access_token
      });
      let options = new RequestOptions({headers: headers, search: search});


     return this._http.get(this.api_url+'products', options)
       .map(
        (response: Response) => {
         // console.log(response);
       
            return response.json().items;
         
        }
        );

  }


  getsortedProducts(data){


              var search = new URLSearchParams();
console.log(data);


   
//       search.set('searchCriteria[filter_groups][0][filters][0][field]', 'name');
//     search.set('searchCriteria[filter_groups][0][filters][0][value]', '%'+data+'%');

// search.set('searchCriteria[filter_groups][0][filters][0][condition_type]', 'like');




    search.set('searchCriteria[filter_groups][1][filters][0][field]', 'visibility');
    search.set('searchCriteria[filter_groups][1][filters][0][value]', '4');

    search.set('searchCriteria[filter_groups][2][filters][0][field]', 'type_id');
    search.set('searchCriteria[filter_groups][2][filters][0][value]', 'simple');
    search.set('searchCriteria[filter_groups][2][filters][1][field]', 'type_id');
    search.set('searchCriteria[filter_groups][2][filters][1][value]', 'downloadable');

    search.set('searchCriteria[filter_groups][3][filters][0][field]', 'status');
    search.set('searchCriteria[filter_groups][3][filters][0][value]', '1');

    search.set('searchCriteria[pageSize]', '50');
    search.set('searchCriteria[currentPage]', '1');

if(data=='lth'){
      search.set('searchCriteria[sortOrders][0][field]', 'price');
    search.set('searchCriteria[sortOrders][0][direction]', 'ASC');
  }else if(data=='htl'){
          search.set('searchCriteria[sortOrders][0][field]', 'price');
    search.set('searchCriteria[sortOrders][0][direction]', 'DESC');
  }else if(data=='newest'){
          search.set('searchCriteria[sortOrders][0][field]', 'created_at');
    search.set('searchCriteria[sortOrders][0][direction]', 'DESC');
  }


      let headers = new Headers({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Authorization': 'Bearer '+this.access_token
      });
      let options = new RequestOptions({headers: headers, search: search});


     return this._http.get(this.api_url+'products', options)
       .map(
        (response: Response) => {
         // console.log(response);
       
            return response.json().items;
         
        }
        );

  }



  // private _handleError(error: Response) {
  //   // in a real world app, we may send the error to some remote logging infrastructure
  //   // instead of just logging it to the console
  //   console.error(error.json());
  //   return Observable.throw(error.json() || 'Server error');
  // }




}