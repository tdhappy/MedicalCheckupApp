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
  public state = [];
  public loading = true;
  constructor(private input:CheckupInputProvider,private symptomsprovider:SymptomsProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.input.symptoms = [];
    this.loading = true;
  }

  ionViewDidLoad() {
    this.symptomsprovider.getSymptoms()
      .toPromise()
      .then(data => {
        this.symptoms = data["data"];
        this.state.length = this.symptoms.length;
        this.loading = false;
      });

  }

  public setDone(){
    this.done = true;
  }

  goToResultsPage(){
    for(let i=0; i< this.state.length;i++){
      if(!!this.state[i]){
        this.input.addSymptoms(this.symptoms[i].ID);
      }
    }
    console.log(this.input.getSymptoms());
    this.navCtrl.push(ResultsPage);

  }

  getInput(symptom){
    this.input.addSymptoms(symptom);
    console.log(this.input.getSymptoms());
  }

  setState(i){
    this.state[i] = !!!this.state[i] ;
  }
}
