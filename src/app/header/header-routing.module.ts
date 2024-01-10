import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateArtComponent } from '../arts/donate-art/donate-art.component';

const routes: Routes = [
  // { path: 'donate-art', component: DonateArtComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
