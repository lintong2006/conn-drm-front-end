import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtsRoutingModule } from './arts-routing.module';
import { ArtsContainerComponent } from './arts-container/arts-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonateArtComponent } from './donate-art/donate-art.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ArtItemFormComponent } from './art-item-form/art-item-form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ArtItemFormComponent,
    ArtsContainerComponent,
    DonateArtComponent
  ],
  imports: [
    CommonModule,
    ArtsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSelectModule,
    HttpClientModule
  ],
  exports: [
    ArtsContainerComponent,
    // ArtItemFormComponent
  ]
})
export class ArtsModule {}
