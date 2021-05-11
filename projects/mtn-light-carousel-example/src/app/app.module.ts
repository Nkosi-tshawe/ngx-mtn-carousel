import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LightCarouselModule } from 'light-carousel';
import {NgxSlickJsModule } from 'ngx-slickjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LightCarouselModule,
  //   NgxSlickJsModule.forRoot({
  //     links: {
  //       jquery: "https://code.jquery.com/jquery-3.4.0.min.js",
  //       slickJs: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
  //       slickCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
  //       slickThemeCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
  //     }
  // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
