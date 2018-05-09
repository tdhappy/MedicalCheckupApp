import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CheckupInputProvider} from "../checkup-input/checkup-input";
import {appSettings} from "../../settings";

/*
  Generated class for the SymptomsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SymptomsProvider {
  public symptoms =[];
  constructor(private input:CheckupInputProvider,public http: HttpClient) {
    console.log('Hello SymptomsProvider Provider');
  }

  getSymptoms()
  {
    let apiurl = appSettings.url + "/symptoms";

    return this.http.post(apiurl,
      {
      "gender":this.input.getGender(),
      "subBodyLocationId":this.input.getSubBodyPart()
    },
      {
        headers:
          {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT'
          }
      }
      );
  }

}

