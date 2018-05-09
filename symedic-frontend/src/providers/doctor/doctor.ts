import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CheckupInputProvider} from "../checkup-input/checkup-input";
import {appSettings} from "../../settings";

/*
  Generated class for the DoctorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DoctorProvider {

  constructor(private input:CheckupInputProvider,public http: HttpClient) {
    console.log('Hello DoctorProvider Provider');
  }

  public getDoctors()
  {
    let apiurl = appSettings.url + "/doctors";

    return this.http.post(apiurl,
      {
        "specialization": this.input.getSpecialization(),
        "zipcode": this.input.getZipcode()
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
