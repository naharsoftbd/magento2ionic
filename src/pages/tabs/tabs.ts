import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { LoginPage } from '../login/login';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = HomePage;
  tab3Root = ListPage;


  constructor() {
  }

 

}
