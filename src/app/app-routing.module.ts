import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./Register/Register.component";
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './Reset/Reset.component';
import { TermsComponent } from './Terms/Terms.component';
import { PrivacyComponent } from './Privacy/Privacy.component';
import { ProfileComponent } from './Profile/Profile.component';
import { Profile2Component } from './Profile2/Profile2.component';
import { Profile3Component } from './Profile3/Profile3.component';
import { Profile4Component } from './Profile4/Profile4.component';
import { Profile5Component } from './Profile5/Profile5.component';
import { Profile6Component } from './Profile6/Profile6.component';


import { Default4Component } from './Default4/Default4.component';
import { FilterComponent } from './Filter/Filter.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  { path: "home", component:  HomeComponent },
  { path: "login", component: LoginComponent },
  
  
  { path: "default4", component: Default4Component },
  { path: "forgot", component: ForgotComponent},
  { path: "terms", component: TermsComponent},
  { path: "privacy", component: PrivacyComponent},
  { path: "profile", component: ProfileComponent},
  { path: "profile2", component: Profile2Component},
  { path: "profile3", component: Profile3Component},
  { path: "profile4", component: Profile4Component},
  { path: "profile5", component: Profile5Component},
  { path: "profile6", component: Profile6Component},
  {path:"filter",component:FilterComponent },
  { path: "reset", component: ResetComponent},
  {
    path: "register",
    component: RegisterComponent,
    children: [
      {
        path: "admin",
        component: HomeComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
