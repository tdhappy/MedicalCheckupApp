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
  public loading = true;
  constructor(private input:CheckupInputProvider,private subbodyprovider:SubbodypartsProvider,public navCtrl: NavController, public navParams: NavParams) {
   this.loading = true;
  }

  ionViewDidLoad() {
  this.subbodyprovider.getSubBodyParts()
    .subscribe(data => {
      this.subbody = data["data"];
      this.loading = false;
    });
  }

  getInput(subbodypart){
    this.input.addSubBodyPart(subbodypart);
  }

  goToSymptomsPage(){
    this.navCtrl.push(SymptomsPage);
  }

}
