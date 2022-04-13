import {Component, OnInit} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import {AuthenticationService} from './services-package/general-services/auth/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{

  isLogin = false;

  constructor(
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService
  ) {
    this.initializeApp();
  }

  initializeApp() {

  }

   async ngOnInit() {
       // we need loading spinner or something
       this.isLogin = localStorage.getItem('token') !== null;
       this.authService.loginSubject.subscribe(async (res) => {
           this.isLogin = res;
       });
    }


}
