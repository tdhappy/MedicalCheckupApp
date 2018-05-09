import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AgePage} from "../age/age";
import {CheckupInputProvider} from "../../providers/checkup-input/checkup-input";

/**
 * Generated class for the GenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gender',
  templateUrl: 'gender.html',
})
export class GenderPage {

  constructor(public checkupinput: CheckupInputProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenderPage');
    this.checkupinput.reset();
    console.log(this.checkupinput.getGender());
    console.log(this.checkupinput.getAge());
    console.log(this.checkupinput.getBodyPart());
    console.log(this.checkupinput.getSubBodyPart());
    console.log(this.checkupinput.getSymptoms());
  }

  goToAgePage(){
    this.navCtrl.push(AgePage);
  }

  getInput(gender){
    this.checkupinput.addGender(gender);
  }

}
