import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtItem, ArtItemDTO, Category } from '../shared/art.model';
import { MOCK_ART, MOCK_CATEGORIES } from '../shared/mock-arts';
import { CategoryListComponent } from '../category-list/category-list.component';

@Component({
  selector: 'app-arts-container',
  standalone: true,
  imports: [CommonModule, CategoryListComponent ],
  templateUrl: './arts-container.component.html',
  styleUrl: './arts-container.component.scss'
})
export class ArtsContainerComponent {
  arts: ArtItem[]=MOCK_ART;
  categories: Category[] = MOCK_CATEGORIES;
  
  constructor() { }
  ngOnInit() {
  }

}
