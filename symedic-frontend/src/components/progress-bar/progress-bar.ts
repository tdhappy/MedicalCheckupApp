import { Component, Input} from '@angular/core';
import {ResultsPage} from "../../pages/results/results";

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  progress = 0;
  @Input('accuracy') accuracy;
  text: string;

  constructor(private resultpage:ResultsPage) {
    setInterval(() => {
      if(this.progress < this.accuracy)
      {
        this.progress++;
        this.resultpage.setLoadProgress(this.progress);
      }
    }, 50);
  }

}
