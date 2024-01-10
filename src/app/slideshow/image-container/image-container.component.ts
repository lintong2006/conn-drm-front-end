import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.scss'
})
export class ImageContainerComponent implements OnInit, OnDestroy {
  images = [
    "../assets/images/slider-final/IMG_6638.jpg",
    "../assets/images/slider-final/IMG_6649.jpg",
    "../assets/images/slider-final/IMG_6652.jpg",
    "../assets/images/slider-final/LTP_3099_print.jpg",
    "../assets/images/slider-final/LTP_8894.jpg",
  ];

  currentImageIndex = 0;
  intervalId: any; 

  ngOnInit() {
    // console.log("ImageContainerComponent.ngOnInit()");
    // this.intervalId = setInterval(() => {
    //   this.callMethod();
    // },3000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  callMethod(){
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
}
