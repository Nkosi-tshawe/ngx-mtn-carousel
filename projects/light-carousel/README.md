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

Assign slide items in your component

```typescript
// Slide Items example.

this.slideItems = [
  {
    id: 1,
    title: "Mobile Internet",
    src: "https://via.placeholder.com/600",
    url: "http://linkurl.com",
  },
  {
    id: 2,
    title: "Home Internet",
    src: "https://via.placeholder.com/600",
    url: "http://linkurl.com",
  },
  {
    id: 3,
    title: "Get a device",
    src: "https://via.placeholder.com/600",
    url: "http://linkurl.com",
  },
  {
    id: 4,
    title: "Add a phone-line",
    src: "https://via.placeholder.com/600",
    url: "http://linkurl.com",
  },
  {
    id: 5,
    title: "Upgrade",
    src: "https://via.placeholder.com/600",
    url: "http://linkurl.com",
  },
];
```

```html
<mtn-light-carousel [configOptions]="options" [items]="slideItems">
  <h1>Slide Title</h1>
</mtn-light-carousel>
```
