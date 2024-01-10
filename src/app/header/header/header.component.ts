import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CartComponent } from '../cart/cart.component';
import { MatIconModule } from '@angular/material/icon'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    SearchBarComponent, 
    CartComponent,
    MatIconModule,
    MatFormFieldModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  onUpload(){
    console.log("Upload");
  }
  gotoHome(){
    this.router.navigate(['/']);                              
  }
}
