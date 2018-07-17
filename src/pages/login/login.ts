import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, LoadingController, ToastController, Events } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

//import { Auth, IDetailedError, Push, PushToken } from '@ionic/cloud-angular';
import { AuthServiceProvider } from '../../providers/auth-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: {username?: string, password?: string} = {};

  submitted = false;

  constructor(public navCtrl: NavController, 
    public loadingCtrl: LoadingController,
   // public auth: Auth,
    public authservice: AuthServiceProvider,
    public toastCtrl: ToastController,
    public events: Events,
   // public push: Push
    ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      // start Loader
      let loading = this.loadingCtrl.create({
        content: "Login wait...",
        duration: 20
      });
      loading.present();



    this.authservice.signin(this.login.username, this.login.password)
    .subscribe(
      response => 
      {
        if (response.status === 200 && this.login.username && this.login.password)
        {
         // loading.dismiss();
          this.navCtrl.setRoot(HomePage);
        }
        else{
          this.showToast("Give  username and passowrd");
        }
      },
      error=> {
        this.showToast("Please give valid username and passowrd");
        }
      
      
    );

    


  










    }
  }

  showToast(response_message:any) {
    let toast = this.toastCtrl.create({
      message: (response_message ? response_message : "Log In Successfully"),
      duration: 1500
    });
    toast.present();
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
