import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import "@angular/compiler";

import { CartPage } from './cart.page';
import { HighlightDirective } from '../../directives/custom/itemHighLights.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: CartPage }
    ])
  ],
  declarations: [
    CartPage, 
    HighlightDirective,
  ]
})
export class CartPageModule {}
