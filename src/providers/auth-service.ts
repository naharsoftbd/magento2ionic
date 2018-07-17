import { Http, Headers, Response,RequestOptions } from '@angular/http';

import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Events } from 'ionic-angular';
import { ACCESS_TOKEN,API_URL } from './constants';  



/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  api_url = API_URL;
  access_token=ACCESS_TOKEN;
is_authenticated: boolean;
  

  constructor(public http: Http, public events: Events) {
    var self = this;
          var data=JSON.parse(localStorage.getItem('currentUser'));
          if(localStorage.getItem("currentUser") === null){
          
  self.is_authenticated = false;

          }else{
      var token=data['token'];
  
  if(token!=''){
   self.is_authenticated = true;
  }else{
    self.is_authenticated = false;
  }

}

  }



  signin(username: string, password: string) {

  
             let body = JSON.stringify({
        username : username,
        password :         password
      });
      let headers = new Headers({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
        
      });
      let options = new RequestOptions({headers: headers});
         console.log(body);

    return this.http.post(this.api_url+'integration/customer/token',
    body,
   
    options
  )
        .map(
            (response: Response) => {

              

                 const response_body= response['_body'];
               localStorage.setItem('currentUser', JSON.stringify({'token':response_body}));
                this.events.publish('user:login');
                                return {token: response_body, status: response.status,  
                     };
                       
            }
        )
        .do(
            tokenData => {
                localStorage.setItem('User', JSON.stringify({'user':body}));
            }
        );
    }



  getApi(username: string, password: string) {

  
             let body = JSON.stringify({
        username : username,
        password :         password
      });
      let headers = new Headers({
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
        
      });
      let options = new RequestOptions({headers: headers});
     //    console.log(body);

    return this.http.post(this.api_url+'integration/admin/token',
    body,
   
    options
  )
        .map(
            (response: Response) => {

              console.log(response);

                 const response_api= response['_body'];
               sessionStorage.setItem('api', JSON.stringify({'apitoken':response_api}));
                
                                return {token: response_api, status: response.status,  
                     };
                       
            }
        );
       
    }





is_Loggedin(){
 
   
          var data=JSON.parse(localStorage.getItem('currentUser'));

          if(localStorage.getItem('currentUser')!=null){
      var token=data['token'];

      // console.log('jfkfkfkkf'+token);
      if(token!=''){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
}

  logout() {
    localStorage.setItem('User', JSON.stringify({'user':''}));
 this.events.publish('user:logout');
localStorage.setItem('currentUser', JSON.stringify({'token':''}));
  }

}

