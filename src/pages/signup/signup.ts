import { Component } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {

  signup: {name?: string, email?: string, password?: string} = {};

  // details: UserDetails = {
  //   "name": this.signup.name, 
  //   "email": this.signup.email, 
  //   "password": this.signup.password
  // };

 

  constructor(
    public navCtrl: NavController, 
    
  
    ) {}

  
onSignup(){


  
}

}
