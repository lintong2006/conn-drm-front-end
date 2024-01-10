import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FooterRoutingModule
  ],
  exports: [
    ContactComponent
  ]
})
export class FooterModule { }
