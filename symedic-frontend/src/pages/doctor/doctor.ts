import { Component , ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CheckupInputProvider} from "../../providers/checkup-input/checkup-input";
import {DoctorProvider} from "../../providers/doctor/doctor";
import {Geolocation} from "@ionic-native/geolocation";

/**
 * Generated class for the DoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
})
export class DoctorPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  public doctors = [];
  public zipcode;
  public specialization;
  public loading = true;

  constructor(private geolocation:Geolocation,private input:CheckupInputProvider, private doctorprovider:DoctorProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.loading = true;
  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then(pos => {
      let latLng = new google.maps.LatLng(pos.coords.latitude , pos.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      var infowindow = new google.maps.InfoWindow();
      this.loading = false;
    });
  }

  loadMap(locations){

    let latLng = new google.maps.LatLng(locations[0][1], locations[0][2]);
    let mapOptions = {
      center: latLng,
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: this.map,
        icon: 'http://localhost:8100/assets/imgs/map.png'
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(this.map, marker);
        }
      })(marker, i));
    }
  }

  setzipCode(){
    this.input.addZipCode(this.zipcode);
  }

  setSpecialization(){
    this.input.addSpecialization(this.specialization);
  }

  search(){
    this.loading = true;
    this.doctorprovider.getDoctors().toPromise().then(data => {
     this.doctors = data["data"];
      let finaldoctors = [];
     for(let i=0; i < this.doctors.length; i++){
       let temp =[];
       temp.push(this.doctors[i]["practices"][0]["name"]);
       temp.push(this.doctors[i]["practices"][0]["lat"]);
       temp.push(this.doctors[i]["practices"][0]["lon"]);
       finaldoctors.push(temp);
     }
      this.loading = false;
      this.loadMap(finaldoctors);
    })
  }

}
