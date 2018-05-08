import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CheckupInputProvider} from "../checkup-input/checkup-input";

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
    let apiurl = "http://localhost:3001/diagnosis";

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
            'Content-Type' : 'application/json'
          }
      }
    );
  }
}
