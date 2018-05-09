import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ResultProvider} from "../../providers/result/result";
import {CheckupInputProvider} from "../../providers/checkup-input/checkup-input";

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  public results = [];
  public loadProgress:number = 0;
  public loading = true;

  constructor(private checkupinput:CheckupInputProvider,private resultprovider: ResultProvider,public navCtrl: NavController, public navParams: NavParams) {
   this.loading = true;
  }

  ionViewDidLoad() {

    this.resultprovider.getResults().toPromise().then(data => {
      this.results = data["data"];
      this.loading = false;
    });
  }

  setLoadProgress(l){
    this.loadProgress = l;
  }

}
