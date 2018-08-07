import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider
} from 'angular-6-social-login';
import { UserDataTransferService } from '../user-data-transfer.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private socialAuthService: AuthService, 
              private data:UserDataTransferService,
              private route: Router ) { }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.data.setData(userData);
        this.route.navigate(['/signedin'])
        // Now sign-in with userData
        // ...
        

      }
    );
  }

  ngOnInit(){
    
  }

}
