import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {OptionsPage} from "../options/options";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToOptionsPage(){
    this.navCtrl.push(OptionsPage);
  }

}
