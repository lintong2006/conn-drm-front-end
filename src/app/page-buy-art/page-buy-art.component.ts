import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtItem, ArtItemDTO } from '../arts/shared/art.model';
import { MOCK_ART } from '../arts/shared/mock-arts';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ArtItemService } from '../services/art-item.service';
import { ArtCardComponent } from '../arts/art-card/art-card.component';

@Component({
  selector: 'app-page-buy-art',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ArtCardComponent,
  ],
  templateUrl: './page-buy-art.component.html',
  styleUrl: './page-buy-art.component.scss'
})

export class PageBuyArtComponent implements OnInit{
  artsDTO: ArtItemDTO[] = [];
  arts: ArtItem[]=MOCK_ART;
  categoryList = ['painting', 'drawing', 'digital', 'photography'];
  currentCategoryId: string = "painting";
  selectedCategory: string = "ALL CATEGORIES";
  constructor(
    private artItemService: ArtItemService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log("PageBuyArtComponent ngOnInit() called");
    console.log(this.route.snapshot.paramMap.get('category_name'));
    this.route.paramMap.subscribe(() => {
      this.listArtItems();
    });
  }

  getArtItems(category: string) {
    this.selectedCategory = category;
    this.artItemService.getArtItemsByCategory(category).subscribe(data => {
      this.artsDTO = data;
    });
  }

  getAllArtItems(){
    this.selectedCategory = "ALL CATEGORIES";
    this.artItemService.getArtItems().subscribe(data => {
      this.artsDTO = data;
    });
  }

  listArtItems() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('category_name');
    if (hasCategoryId) {
      console.log("hasCategoryId is true");
      this.getArtItems(this.route.snapshot.paramMap.get('category_name')!);
    }
    else {
      this.getAllArtItems();
    }
  }
}
