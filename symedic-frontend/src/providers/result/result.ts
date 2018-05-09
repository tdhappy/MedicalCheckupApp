import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CheckupInputProvider} from "../checkup-input/checkup-input";
import {appSettings} from "../../settings";

/*
  Generated class for the ResultProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ResultProvider {

  constructor(private input:CheckupInputProvider,public http: HttpClient) {
    console.log('Hello ResultProvider Provider');
  }

  public getResults()
  {
    let apiurl = appSettings.url + "/diagnosis";

    let gender = this.input.getGender();
    if(gender == "woman"){
      gender = "female";
    }
    else {
      gender = "male";
    }

    return this.http.post(apiurl,
      {
        "gender": gender,
        "age":this.input.getAge(),
        "symptoms": this.input.getSymptoms()
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
