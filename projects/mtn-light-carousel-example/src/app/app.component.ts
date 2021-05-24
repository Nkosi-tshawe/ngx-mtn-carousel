import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<mtn-light-carousel [items]="slideItems">
    <h1>What are you<br /><b>here to do?</b></h1>
  </mtn-light-carousel>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mtn-light-carousel-example';

  slideItems;

  ngOnInit(): void {
    this.slideItems = [
      {
        id: 1,
        src: 'https://via.placeholder.com/600',
        alt: 'Mobile Internet',
        title: 'Mobile Internet',
        url: '#',
      },
      {
        id: 2,
        src: 'https://via.placeholder.com/600',
        alt: 'Home Internet',
        title: 'Home Internet',
        url: '#',
      },
      {
        id: 3,
        src: 'https://via.placeholder.com/600',
        alt: 'Get a device',
        title: 'Get a device',
        url: '#',
      },
      {
        id: 4,
        src: 'https://via.placeholder.com/600',
        alt: 'Add a phone-line',
        title: 'Add a phone-line',
        url: '#',
      },
      {
        id: 5,
        src: 'https://via.placeholder.com/600',
        alt: 'Upgrade',
        title: 'Upgrade',
        url: '#',
      },
    ];
  }
}
