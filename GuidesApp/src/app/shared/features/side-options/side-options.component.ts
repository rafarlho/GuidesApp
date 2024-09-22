import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { RouterLink } from '@angular/router';


interface MenuOptions {
  subheader?:boolean
  icon?:string
  name:string
  routerLink?:string
}

@Component({
  selector: 'app-side-options',
  standalone: true,
  imports: [
    MatDividerModule,
    MatIconModule,
    MatListModule,
    RouterLink
  ],
  templateUrl: './side-options.component.html',
  styleUrl: './side-options.component.scss'
})
export class SideOptionsComponent {
  menuOptions: MenuOptions[] = [
    {
      name:'Home',
      icon: 'home',
      routerLink: '/home'
    },
    {
      name:'Angular Material',
      subheader:true
    },
    {
      name:'Custom Theme',
      icon: 'palette',
      routerLink: '/material/custom-theme'
    },
  ]
}
