# MtnCarousel

## Install

```bash
npm install ngx-slickjs
npm install mtn-carousel
```

### Sub Module Import

```typescript
import { NgxSlickJsModule } from "ngx-slickjs";
import { LightCarouselModule } from "light-carousel";

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

```html
<mtn-light-carousel configOptions="options">
  <h1>Title</h1>
</mtn-light-carousel>
```
