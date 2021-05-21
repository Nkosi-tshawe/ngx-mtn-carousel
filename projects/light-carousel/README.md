# MtnCarousel

## Install

```bash
npm install mtn-carousel
```

### Sub Module Import

```typescript
import { LightCarouselModule } from "light-carousel";

@NgModule({
  imports: [
    // ...

    LightCarouselModule,
  ],
})
```

Import Slick to your component

```typescript
// Slide Items example.

this.slideItems = [
  {
    id: 1,
    title: "Mobile Internet",
    src: "https://imageurl.com",
    url: "http://linkurl.com",
  },
  {
    id: 2,
    title: "Home Internet",
    src: "https://imageurl.com",
    url: "http://linkurl.com",
  },
  {
    id: 3,
    title: "Get a device",
    src: "https://imageurl.com",
    url: "http://linkurl.com",
  },
  {
    id: 4,
    title: "Add a phone-line",
    src: "https://imageurl.com",
    url: "http://linkurl.com",
  },
  {
    id: 5,
    title: "Upgrade",
    src: "https://imageurl.com",
    url: "http://linkurl.com",
  },
];
```

```html
<mtn-light-carousel [configOptions]="options" [slideItems]="">
  <h1>Title</h1>
</mtn-light-carousel>
```
