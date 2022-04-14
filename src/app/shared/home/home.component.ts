import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services-package/general-services/auth/authentication.service';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: MenuItem[];
  constructor(private authenticationService: AuthenticationService, private  router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Locations',
        icon: 'pi pi-home',
        items: [
          {
            label: 'Locations',
            icon: 'pi pi-home',
            routerLink:'/location/home'
          },
          {
            label: 'New Locations',
            icon: 'pi pi-home',
            routerLink:'/location/unconfirmed'
          }
        ]
      },
      {
        label: 'Users',
        icon: 'pi pi-users',
        routerLink:'/user/home'
      }
    ];
  }

    logout() {

        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
