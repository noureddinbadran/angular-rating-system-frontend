import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from '../services-package/general-services/auth/auth.guard';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
    {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},

    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},

];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})

export class SharedRoutingModule {

}