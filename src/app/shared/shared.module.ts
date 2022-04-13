import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {SharedRoutingModule} from './shared.routing';
import {IonicModule} from '@ionic/angular';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {ServicesPackageModule} from '../services-package/services-package.module';
import {SignupComponent} from './signup/signup.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MenubarModule} from 'primeng/menubar';
import {ComponentsModule} from '../components/components.module';
import {LoginComponent} from './login/login.component';


@NgModule({
    declarations: [
        LoginComponent,
        DashboardComponent,
        HomeComponent,
        SignupComponent,

    ],
    imports: [
        MenubarModule,
        MessageModule,
        MessagesModule,
        ReactiveFormsModule,
        SharedRoutingModule,
        IonicModule,
        ServicesPackageModule,
        NgbModule,
        ComponentsModule
    ],
    exports: [
        HomeComponent,
        LoginComponent,
    ]
})


export class SharedModule {

}

