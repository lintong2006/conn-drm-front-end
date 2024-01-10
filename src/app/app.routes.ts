import { Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageDonateArtComponent } from './page-donate-art/page-donate-art.component';
import { PageBuyArtComponent } from './page-buy-art/page-buy-art.component';
import { PageJoinUsComponent } from './page-join-us/page-join-us.component';
import { PageCartComponent } from './page-cart/page-cart.component';
import { ArtDetailComponent } from './arts/art-detail/art-detail.component';

export const routes: Routes = [
    { path: '', component: PageHomeComponent, pathMatch: 'full' },
    // { path: '', redirectTo: '/category', pathMatch: 'full' },
    { path: 'donate-art', component: PageDonateArtComponent },
    { path: 'category/:category_name', component: PageBuyArtComponent},
    { path: 'category', component: PageBuyArtComponent },
    { path: 'join-us', component: PageJoinUsComponent },
    { path: 'cart', component: PageCartComponent },
    { path: 'art-detail/:id', component: ArtDetailComponent},
    { path: '**', redirectTo: '/category', pathMatch: 'full'}
];