# MtnCarousel

## Install

```bash
npm install ngx-slickjs
npm install @tagron/light-carousel
```

### Sub Module Import

```typescript
import { NgxSlickJsModule } from "ngx-slickjs";
import { LightCarouselModule } from "@tagron/light-carousel";

@NgModule({
  imports: [
    // ...
    NgxSlickJsModule,
    LightCarouselModule,
  ],
})
export class AnotherModule {}
```

### Scripts and styles urls

forRoot Options:

| Property      | Default                                                                 |
| ------------- | ----------------------------------------------------------------------- |
| jquery        | https://code.jquery.com/jquery-3.4.0.min.js                             |
| slickJs       | https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js    |
| slickCss      | https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css       |
| slickThemeCss | https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css |

Note: The above urls are download lazy. The urls don't increase initial opening time.

Example:

```typescript
import { NgxSlickJsModule } from "ngx-slickjs";

@NgModule({
  imports: [
    // ...
    NgxSlickJsModule.forRoot({
      links: {
        jquery: "https://code.jquery.com/jquery-3.4.0.min.js",
        slickJs:
          "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
        slickCss:
          "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
        slickThemeCss: null, // if you are set null, this css won't load
      },
    }),
  ],
})
export class AppModule {}
```

## Usage

Import module to your main module

```typescript
import { NgxSlickJsModule } from "ngx-slickjs";

@NgModule({
  imports: [
    // ...
    NgxSlickJsModule.forRoot(),
  ],
})
export class AppModule {}
```

Import Slick to your component

```typescript
import { Slick } from "ngx-slickjs";

// Slick config example
this.config = {
  slidesToShow: 1,
  arrows: false,
  centerMode: true,
  variableWidth: true,
  adaptiveHeight: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "40px",
        adaptiveHeight: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 999,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "40px",
        adaptiveHeight: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "40px",
        adaptiveHeight: false,
        slidesToShow: 5,
      },
    },
  ],
};

// Slide Items example.

this.slideItems = [
  {
    id: 1,
    title: "Mobile Internet",
  },
  {
    id: 2,
    title: "Home Internet",
  },
  {
    id: 3,
    title: "Get a device",
  },
  {
    id: 4,
    title: "Add a phone-line",
  },
  {
    id: 5,
    title: "Upgrade",
  },
];
```

```html
<mtn-light-carousel [configOptions]="options" [slideItems]="">
  <h1>Title</h1>
</mtn-light-carousel>
```
