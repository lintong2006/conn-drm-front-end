import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ArtsContainerComponent } from './arts/arts-container/arts-container.component';
import { ContactComponent } from './footer/contact/contact.component';
import { ImageContainerComponent } from './slideshow/image-container/image-container.component';
import { HeaderComponent } from './header/header/header.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageDonateArtComponent } from './page-donate-art/page-donate-art.component';
import { PageDonateArtModule } from './page-donate-art/page-donate-art.module';
import { ArtItemService } from './services/art-item.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    
    HeaderComponent,
    ContactComponent,
    
    PageHomeComponent,
    PageDonateArtModule
  ],
  providers: [ArtItemService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
