import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CheckupInputProvider} from "../checkup-input/checkup-input";
import 'rxjs/add/operator/map';
import {appSettings} from '../../settings';
/*
  Generated class for the SubbodypartsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class SubbodypartsProvider {

  constructor(private input:CheckupInputProvider,public http: HttpClient) {
    console.log('Hello SubbodypartsProvider Provider');
  }

  getSubBodyParts(){
    let apiurl = appSettings.url + "/body/locations/" + this.input.getBodyPart();
    return this.http.get(apiurl, {
      headers:
        {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT'
        }
    });
  }
}
