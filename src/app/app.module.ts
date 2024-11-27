import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RepeatPipe } from './pipes/structure/repeat.pipe';
import { VisibleDirective } from './directives/custom/visible.directive';
import { RepeatElementDirective } from './directives/structures/repeat.directive';

@NgModule({
  declarations: [
    AppComponent,
    RepeatPipe,
    VisibleDirective,
    RepeatElementDirective,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
