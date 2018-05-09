import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CheckupInputProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CheckupInputProvider {
  public gender: any;
  public age: any;
  public bodypart: any;
  public subbodypart: any;
  public symptoms: any = [] ;
  public zipcode: any;
  public specialization: any;

  constructor(public http: HttpClient) {
    console.log('Hello CheckupInputProvider Provider');
  }

  getGender(){
    return this.gender;
  }

  addGender(g: string): any{
    this.gender = g;
  }

  getAge(){
    return this.age;
  }

  addAge(a:number): any{
    this.age = a;
  }

  getBodyPart(){
    return this.bodypart;
  }

  addBodyPart(b: number){
    this.bodypart = b;
  }

  getSubBodyPart(){
    return this.subbodypart;
  }

  addSubBodyPart(s: number){
    this.subbodypart = s;
  }

  getSymptoms(){
    return this.symptoms;
  }

  addSymptoms(i: number){
    this.symptoms.push(i);
  }

  getZipcode(){
    return this.zipcode;
  }

  addZipCode(z){
    this.zipcode = z;
  }

  getSpecialization(){
    return this.specialization;
  }

  addSpecialization(s){
    this.specialization = s;
  }

  reset(){
    this.gender = null;
    this.age =0;
    this.bodypart = 0;
    this.subbodypart =0;
    this.symptoms = [];
  }
}
