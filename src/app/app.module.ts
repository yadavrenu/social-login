import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider,
} from "angular-6-social-login";


import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { SignedinComponent } from './signedin/signedin.component'

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("400518000472710")
        }
      ]
  );
  return config;
}
 
const route: Routes= [
  {
    path: "",
    component : SigninComponent
  },
  {
    path :"signedin",
    component: SignedinComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignedinComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    RouterModule.forRoot(route)
  ],
  providers: [{ provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs}],
  bootstrap: [AppComponent]
})
export class AppModule { }
