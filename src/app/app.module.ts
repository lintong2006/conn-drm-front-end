import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtsModule } from './arts/arts.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { ArtsContainerComponent } from './arts/arts-container/arts-container.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { DonateArtComponent } from './arts/donate-art/donate-art.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { routes } from './app.routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageDonateArtModule } from './page-donate-art/page-donate-art.module';
import { ArtItemService } from './services/art-item.service';


@NgModule({
  declarations: [
    ArtsContainerComponent,
    DonateArtComponent,
    PageHomeComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    ArtsModule,
    HeaderModule,
    FooterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule, 
    ReactiveFormsModule,
    PageDonateArtModule
  ],
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
  ]
})
export class AppModule { }
