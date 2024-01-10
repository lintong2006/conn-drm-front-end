import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PageDonateArtComponent } from './page-donate-art.component';
import { ArtItemFormComponent } from '../arts/art-item-form/art-item-form.component';

@NgModule({
  declarations: [PageDonateArtComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CommonModule, 
    ArtItemFormComponent
  ],
  // providers: [ArtItemService],
})
export class PageDonateArtModule {}
