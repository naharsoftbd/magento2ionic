import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';



import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProductsPage } from '../pages/products/products';
import { ProductDetailPage } from '../pages/product-detail/product-detail';

import { ProductsFilterPage } from '../pages/products-filter/products-filter';
import { SearchPage } from '../pages/search/search';

import { AuthPage } from '../pages/auth/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';


import { DataService } from '../providers/data-service';
import { AuthServiceProvider } from '../providers/auth-service';
import { MagentoService } from '../providers/magento-service';

import { CategoriesPage } from '../pages/categories/categories';
import { CategoryPage } from '../pages/category/category';
import { CommonProvider } from '../providers/common/common';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    SignupPage,
    CategoriesPage,
    ProductsPage,
    ProductDetailPage,
    ProductsFilterPage,
    SearchPage,
    AccountPage,
	AuthPage,
	CategoryPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    SignupPage,
    CategoriesPage,
    ProductsPage,
    ProductDetailPage,
    ProductsFilterPage,
    SearchPage,
    AccountPage,
    AuthPage,
	CategoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleAnalytics,
	CommonProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService,
    AuthServiceProvider,
   
    MagentoService
  ]
})
export class AppModule {}
