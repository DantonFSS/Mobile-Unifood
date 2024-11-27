import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'announce', loadChildren: () => import('./pages/announce/announce.module').then(m => m.AnnouncePageModule) },
  { path: 'map', loadChildren: () => import('./pages/map/map.module').then(m => m.MapPageModule) },
  { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
