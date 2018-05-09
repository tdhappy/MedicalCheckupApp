import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  public pageselected = "checkup";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionsPage');
  }

  @ViewChild(Slides) slides: Slides;

  changePageTitle()
  {
    let activePage = this.slides.getActiveIndex();
    switch(activePage){
      case 0: {this.pageselected = "checkup";
      break;}

      case 1: {this.pageselected = "doctor";
        break;}

      case 2: {this.pageselected = "faq";
        break;}
    }
  }

}
