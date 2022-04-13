import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    items: MenuItem[];

    breakpointCol: number;
    breakpointHeight: string;

  constructor() { }

  ngOnInit() {
      this.items = [
          {
              label: 'Locations',
              icon: 'pi pi-home',
              routerLink:'/location/home'
          },
          {
              label: 'Users',
              icon: 'pi pi-users',
              routerLink:'/user/home'
          }
      ];
  }

    onResize(event) {
        this.breakpointCol = (window.innerWidth <= 600) ? 1 : 3;
        this.breakpointHeight = (window.innerWidth <= 600) ? '7rem' : '10rem';
    }

}
