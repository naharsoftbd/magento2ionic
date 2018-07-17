import { Component, ViewChild } from '@angular/core';

import { Events,Platform, MenuController, Nav } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';

import { CategoriesPage } from '../pages/categories/categories';
import { ProductsPage } from '../pages/products/products';





import { AuthPage } from '../pages/auth/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service';




export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  is_loggedin?: boolean;
  logout?: boolean;
  index?: number;
  tabComponent?: any;
}



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

private loggedin=0;
  


  rootPage = HomePage;
 
  



appPages: PageInterface[] = [
    { title: 'home', component: HomePage, icon: 'home' },
    { title: 'categories', component: CategoriesPage, index: 1, icon: 'list' },

    { title: 'Products', component: ProductsPage, index: 4, icon: 'heart' }
  ];

  // if(this.loggedin){
      loggedInPages: PageInterface[] = [
    { title: 'account', component: AccountPage, icon: 'person' , },
    { title: 'logout', component: HomePage, icon: 'log-out', logout:true}
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'login', component: AuthPage, icon: 'log-in' },
    { title: 'signup', component: AuthPage, icon: 'person-add'}
  ];
 



  constructor(
    public events: Events,
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public auth: AuthServiceProvider,
   // public page: PageInterface,
  ) {

      this.initializeApp();

   // this.loggedin=0;

  if(this.auth.is_Loggedin()){
 
    this.loggedin=1;
  }else{
    this.loggedin=0;
  }




this.listenToLoginEvents();
  



  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);


        if (page.logout === true && this.loggedin==1) {
          this.loggedin=0;
      // Give the menu time to close before changing to logged out
      setTimeout(() => {
        this.auth.logout();
      }, 1000);
    }
  }


  





 isActive(page: PageInterface) {
    if (this.nav.getActive() && this.nav.getActive().component === page.component) {
      return 'primary';
    }
    return;
  }




    listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.loggedin=1;
    });

    this.events.subscribe('user:logout', () => {
      this.loggedin=0;
    });
  }


  //    enableMenu(loggedIn: boolean) {
  //   this.menu.enable(loggedIn, 'loggedInMenu');
  //   this.menu.enable(!loggedIn, 'loggedOutMenu');
  // }





}
