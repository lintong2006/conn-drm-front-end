import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatSidenavModule } from '@angular/material/sidenav'; // import MatSidenavModule
import { MatListModule } from '@angular/material/list'; // import MatListModule
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule, // add MatSidenavModule to imports
    MatListModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
