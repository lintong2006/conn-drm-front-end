import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtItemFormComponent } from './art-item-form/art-item-form.component';
import { ArtsContainerComponent } from './arts-container/arts-container.component';
import { DonateArtComponent } from './donate-art/donate-art.component';


const routes: Routes = [
  // { path: '', component: ArtsContainerComponent },
  // { path: 'donate-art', component: DonateArtComponent }
  // { path: '**', redirectTo: ''}
  // { path: 'donate-art', loadChildren: () => import('./donate-art/donate-art.module').then(m => m.DonateArtModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtsRoutingModule { }