import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtItem, ArtItemDTO } from '../shared/art.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-art-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './art-card.component.html',
  styleUrl: './art-card.component.scss'
})
export class ArtCardComponent implements OnInit {
  @Input()
  art!: ArtItemDTO;
  constructor(private router: Router) { }
  ngOnInit() {}

  gotoCardDetail(){
    console.log(this.art.id);
    this.router.navigate(['/art-detail', this.art.id]);
  }
}
