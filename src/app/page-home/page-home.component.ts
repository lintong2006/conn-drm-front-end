import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtsContainerComponent } from '../arts/arts-container/arts-container.component';
import { ImageContainerComponent } from '../slideshow/image-container/image-container.component';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [CommonModule,ArtsContainerComponent,ImageContainerComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.scss'
})
export class PageHomeComponent {

  
}
