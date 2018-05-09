import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {

  items = [
    {
      name: 'How accurate are the results?',
      description: 'The results are about 90 % accurate. However, content provided here is for\n' +
      'educational purposes only, and is not intended to constitute professional\n' +
      'medical advice, diagnosis or treatment. Content does not address individual\n' +
      'circumstances and should not be relied on to make decisions about your\n' +
      'health. Do not ignore or delay obtaining professional medical advice because\n' +
      'of the information present here. Seek immediate medical assistance or call\n' +
      'your doctor for all medical emergencies.'
    },
    {
      name: 'What do we do with your information?',
      description: 'We know that you care how information about you is used and safeguarded.\n' +
      'Your responses to questionnaires on this website are entirely voluntary and\n' +
      'will be used, anonymously, in ongoing research and will not be released or\n' +
      'sold to any third-party vendors.'
    },
    {
      name: 'What devices are supported?',
      description: 'SymMedic is currently available for only iPhone devices with iOS 9 or later.\n' +
      'iPods and iPads are not supported at the moment.'
    },
    {
      name: 'How to use SymMedic?',
      description: 'Download and Install the app on your iPhone. Follow the instructions on\n' +
      'screen which helps to navigate.'
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }

}
