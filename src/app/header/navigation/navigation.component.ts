import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'

})

export class NavigationComponent {
  isMobileMenu: boolean = false;
  constructor(private router: Router) {}

  gotoDonateArt(){
    this.router.navigate(['/donate-art']);                              
  }

  gotoBuyArt(){
    this.router.navigate(['/category']);                              
  }

  gotoJoinUs(){
    this.router.navigate(['/join-us']);                              
  }

  toggleMobileMenu(){
    this.isMobileMenu = !this.isMobileMenu;
    console.log(this.isMobileMenu);
  }
}