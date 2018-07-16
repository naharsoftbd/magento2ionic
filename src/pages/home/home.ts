import { Component} from '@angular/core';
//import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { NavController, LoadingController } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	categories: any = []
    loading: any;
 
    username: string;
    password: string;
 

  constructor(public navCtrl: NavController, public commonProvider: CommonProvider, public loadingCtrl: LoadingController) {

  }
  
  ionViewDidLoad(){
		   /* var headers = new Headers();
			headers.append('content-type','application/json');
			headers.append('X-Requested-With', 'XMLHttpRequest');
			headers.append('Authorization', "Bearer" +' betq1rsl4odp9ta33t7auswcfffc8yhv');
			let options = new RequestOptions({ headers:headers});
        this.http.get('http://192.168.0.250/utshobm/rest/V1/categories/',options).map(res => res.json()).subscribe((categories) => {
            this.categories = categories;
			console.log(categories);
        });*/
		
 
    }
	
	
 

}
