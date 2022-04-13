import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {AuthenticationService} from './services-package/general-services/auth/authentication.service';
import {httpInterceptorProviders} from './services-package/interceptors';
import {AuthGuard} from './services-package/general-services/auth/auth.guard';
import {RatingService} from './services/rating.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        DataTablesModule.forRoot(),
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        SharedModule,
        HttpClientModule,
    ],
    exports:[
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        httpInterceptorProviders,
        AuthenticationService,
        RatingService,
        AuthGuard,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
