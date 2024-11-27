import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AnnouncePage } from './announce.page';
import { HighlightDirective } from '../../directives/custom/itemHighLights.directive';
import { RepeatElementDirective } from 'src/app/directives/structures/repeat.directive';


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
    HighlightDirective,
    RepeatElementDirective,
  ]
})
export class AnnouncePageModule {}
