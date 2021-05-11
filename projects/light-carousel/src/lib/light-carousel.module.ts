import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightCarouselComponent } from './light-carousel.component';

import { NgxSlickJsModule} from 'ngx-slickjs';

@NgModule({
  declarations: [LightCarouselComponent],
  imports: [
    CommonModule,
    // NgxSlickJsModule.forRoot()
    NgxSlickJsModule.forRoot({
      links: {
        jquery: "https://code.jquery.com/jquery-3.4.0.min.js",
        slickJs: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
        slickCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
        slickThemeCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
      }
  })
  ],
  exports: [LightCarouselComponent]
})
export class LightCarouselModule { }
