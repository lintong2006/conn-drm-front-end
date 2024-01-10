import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../shared/art.model';
import { CategoryCardComponent } from '../category-card/category-card.component';
import { ArtItemService } from '../../services/art-item.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, CategoryCardComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent implements OnInit{
  @Input() 
  categories: Category[] = [];
  selectedCategory = "painting";
  constructor(private artItemService: ArtItemService,private router: Router) { }
  ngOnInit() {}

}
