import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtItemDTO } from '../shared/art.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtItemService } from '../../services/art-item.service';

@Component({
  selector: 'app-art-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './art-detail.component.html',
  styleUrl: './art-detail.component.scss'
})
export class ArtDetailComponent {
  art!: ArtItemDTO;
  constructor(
    private artItemService: ArtItemService,
    private router: ActivatedRoute,
    private route: Router
  ) { 
    this.router.paramMap.subscribe(params => {
      const art_item_id: number = +params.get('id')!;
      console.log("need to fetch art item with id:", art_item_id);
      if (art_item_id) {
        this.artItemService.getArtItemById(art_item_id).subscribe(data => {
          this.art = data;
          console.log(this.art.imageUrl);
        });
      }
    });
  }

  gotoBuyArt(cur_category: string){
    console.log("in gotoBuyArt",cur_category);
    this.route.navigate(['/category', cur_category]);                              
  }

}
