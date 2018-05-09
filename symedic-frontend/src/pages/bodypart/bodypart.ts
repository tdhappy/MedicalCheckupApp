import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SubBodypartsPage} from "../sub-bodyparts/sub-bodyparts";
import {CheckupInputProvider} from "../../providers/checkup-input/checkup-input";
import {SubbodypartsProvider} from "../../providers/subbodyparts/subbodyparts";

/**
 * Generated class for the BodypartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bodypart',
  templateUrl: 'bodypart.html',
})
export class BodypartPage {
  constructor(private subbodypart:SubbodypartsProvider,private checkupinput:CheckupInputProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BodypartPage');
    console.log(this.checkupinput.getGender());
    console.log(this.checkupinput.getAge());
  }

  goToSubBodyPart(){
    this.navCtrl.push(SubBodypartsPage);
  }

  getInput(bodypart){
    this.checkupinput.addBodyPart(bodypart);
  }

}
