import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SymptomsProvider} from "../../providers/symptoms/symptoms";
import {ResultsPage} from "../results/results";
import {CheckupInputProvider} from "../../providers/checkup-input/checkup-input";

/**
 * Generated class for the SymptomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-symptoms',
  templateUrl: 'symptoms.html',
})
export class SymptomsPage {
  public done = false;
  public symptoms =[];
  constructor(private input:CheckupInputProvider,private symptomsprovider:SymptomsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.symptomsprovider.getSymptoms()
      .toPromise()
      .then(data => {
        this.symptoms = JSON.parse(data["data"]);
      });
    this.input.reset();
  }

  public setDone(){
    this.done = true;
  }

  goToResultsPage(){
    this.navCtrl.push(ResultsPage);

  }

  getInput(symptom){
    this.input.addSymptoms(symptom);
  }

}
