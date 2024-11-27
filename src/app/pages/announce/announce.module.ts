import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AnnouncePage } from './announce.page';
import { RepeatElementDirective } from 'src/app/directives/structures/repeat.directive';
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
    RepeatElementDirective,
    HighlightDirective
  ]
})
export class AnnouncePageModule {}
