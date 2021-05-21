import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LightCarouselModule } from '@tagron/light-carousel';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LightCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
