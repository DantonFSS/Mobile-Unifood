import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CurrencyBrlPipe } from '../../pipes/currency.pipe';
import { AnnouncePage } from './announce.page';
import { HighlightDirective } from '../../directives/custom/itemHighLights.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', component: AnnouncePage }
    ])
  ],
  declarations: [
    AnnouncePage,
    CurrencyBrlPipe,
    HighlightDirective,
  ]
})
export class AnnouncePageModule {}
