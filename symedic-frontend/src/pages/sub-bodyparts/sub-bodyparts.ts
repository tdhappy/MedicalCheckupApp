import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SubbodypartsProvider} from "../../providers/subbodyparts/subbodyparts";
import {CheckupInputProvider} from "../../providers/checkup-input/checkup-input";
import {SymptomsPage} from "../symptoms/symptoms";

/**
 * Generated class for the SubBodypartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sub-bodyparts',
  templateUrl: 'sub-bodyparts.html',
})
export class SubBodypartsPage {

public subbody=[];
  constructor(private input:CheckupInputProvider,private subbodyprovider:SubbodypartsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  this.subbodyprovider.getSubBodyParts()
    .subscribe(data => {
      this.subbody = JSON.parse(data["data"]);
    });
  }

  getInput(subbodypart){
    this.input.addSubBodyPart(subbodypart);
  }

  goToSymptomsPage(){
    this.navCtrl.push(SymptomsPage);
  }

}
