import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {OptionsPage} from "../pages/options/options";
import {GenderPage} from "../pages/gender/gender";
import {AgePage} from "../pages/age/age";
import {TabsPage} from "../pages/tabs/tabs";
import { BodypartPage} from "../pages/bodypart/bodypart";
import {SubBodypartsPage} from "../pages/sub-bodyparts/sub-bodyparts";
import { CheckupInputProvider } from '../providers/checkup-input/checkup-input';
import { HttpClientModule } from '@angular/common/http';
import { SubbodypartsProvider } from '../providers/subbodyparts/subbodyparts';
import {SymptomsPage} from "../pages/symptoms/symptoms";
import { SymptomsProvider } from '../providers/symptoms/symptoms';
import { ResultProvider } from '../providers/result/result';
import { DoctorProvider } from '../providers/doctor/doctor';
import {ResultsPage} from "../pages/results/results";
import {DoctorPage} from "../pages/doctor/doctor";
import  {FaqPage} from "../pages/faq/faq";
import {ProgressBarComponent} from "../components/progress-bar/progress-bar";
import {Geolocation} from "@ionic-native/geolocation";
import {AccordionListComponent} from "../components/accordion-list/accordion-list";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OptionsPage,
    GenderPage,
    AgePage,
    TabsPage,
    BodypartPage,
    SubBodypartsPage,
    SymptomsPage,
    ResultsPage,
    DoctorPage,
    FaqPage,
    ProgressBarComponent,
    AccordionListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OptionsPage,
    GenderPage,
    AgePage,
    TabsPage,
    BodypartPage,
    SubBodypartsPage,
    SymptomsPage,
    ResultsPage,
    DoctorPage,
    FaqPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CheckupInputProvider,
    SubbodypartsProvider,
    SymptomsProvider,
    ResultProvider,
    DoctorProvider,
    Geolocation
  ]
})
export class AppModule {}
