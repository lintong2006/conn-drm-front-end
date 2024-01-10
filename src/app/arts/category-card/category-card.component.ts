import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../shared/art.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent implements OnInit {
  @Input()
  category!: Category;
  constructor(private router: Router) { }
  ngOnInit() {}

  gotoACategory(){
    console.log("in gotoACategory",this.category.name);
    this.router.navigate(['/category', this.category.name.toLocaleLowerCase()]);  
  }
}
