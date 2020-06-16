import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { AppRoutingModule } from "./app-routing.module";
import {NgxPaginationModule} from "ngx-pagination";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import 'hammerjs';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from "./app.component";
import { RegisterComponent } from "./Register/Register.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './Reset/Reset.component';
import { TermsComponent } from './Terms/Terms.component';
import { PrivacyComponent } from './Privacy/Privacy.component';


import { Default4Component } from './Default4/Default4.component';
import { Profile2Component } from './Profile2/Profile2.component';
import { from } from 'rxjs';
import { Profile3Component } from './Profile3/Profile3.component';
import { ProfileComponent } from './Profile/Profile.component';
import { Profile4Component } from './Profile4/Profile4.component';
import { Profile5Component } from './Profile5/Profile5.component';
import { FilterComponent } from './Filter/Filter.component';
import { Profile6Component } from './Profile6/Profile6.component';







@NgModule({
   declarations: [
      AppComponent,
      RegisterComponent,
      LoginComponent,
      HomeComponent,
      ForgotComponent,
      ResetComponent,
      TermsComponent,
      PrivacyComponent,
      
      
      Default4Component,
      Profile2Component,
      Profile3Component,
      ProfileComponent,
      Profile4Component,
      Profile5Component,
      FilterComponent,
      Profile6Component
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      TreeGridModule,
      ButtonModule,
      ReactiveFormsModule,
      FormsModule,
      NgxPaginationModule,
      HttpClientModule,
      BrowserAnimationsModule,
      NgxStarRatingModule,
      MultiSelectAllModule,
      NgSelectModule,
      BsDatepickerModule.forRoot()
   ],
   providers: [],
   entryComponents: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
