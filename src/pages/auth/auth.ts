import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
/**
 * Generated class for the AuthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AuthPage');
  // }


    Login() {
    // close the menu when clicking a link from the menu
   
    // navigate to the new page if it is not the current page
    this.navCtrl.setRoot(LoginPage);
  }

      Signup() {
    // close the menu when clicking a link from the menu
   
    // navigate to the new page if it is not the current page
    this.navCtrl.setRoot(SignupPage);
  }

}
