//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
//var apiURL = "http://192.168.0.250/utshobm/rest/V1/";
var apiURL = "http://167.99.48.170/rest/V1/";
var accessToken = ' fs0qxo50h05gtrlads0cjl4dni4yxw8b';
//var accessToken = ' betq1rsl4odp9ta33t7auswcfffc8yhv';
@Injectable()
export class CommonProvider {
	
	categories: any = []
    loading: any;

  constructor(public http: Http) {
    console.log('Hello CommonProvider Provider');
  }
  
  
 getCategories(){
	        var headers = new Headers();
			headers.append('content-type','application/json');
			headers.append('X-Requested-With', 'XMLHttpRequest');
			headers.append('Authorization', "Bearer" + accessToken);
			let options = new RequestOptions({ headers:headers});
            return this.http.get(apiURL+'categories/',options).map(res => res.json());
  }

  getChildCategories(id){
			var headers = new Headers();
			headers.append('content-type','application/json');
			headers.append('X-Requested-With', 'XMLHttpRequest');
			headers.append('Authorization', "Bearer" + accessToken);
			let options = new RequestOptions({ headers:headers});
            return this.http.get(apiURL+'categories/'+id,options).map(res => res.json());
  }
}
