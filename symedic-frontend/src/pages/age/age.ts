import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BodypartPage} from "../bodypart/bodypart";
import {CheckupInputProvider} from "../../providers/checkup-input/checkup-input";

/**
 * Generated class for the AgePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-age',
  templateUrl: 'age.html',
})
export class AgePage {

  public age: number = 0;
  public done = false;

  constructor(public checkupinput:CheckupInputProvider,public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgePage');
  }

  public setDone(){
    this.done = true;
  }

  goToBodypartPage(){
    this.navCtrl.push(BodypartPage);
  }

  getInput(age){
    this.checkupinput.addAge(age);
  }
}
