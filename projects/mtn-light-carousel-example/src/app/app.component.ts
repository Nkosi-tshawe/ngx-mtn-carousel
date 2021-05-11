import { Component } from '@angular/core';

import { Slick } from 'ngx-slickjs';

@Component({
  selector: 'app-root',
  template:`<mtn-light-carousel [slideItems]="slideItems" [configOptions]="config">
              <h1>What are you<br /><b>here to do?</b></h1>
            </mtn-light-carousel>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mtn-light-carousel-example';

  slideItems;
  config: Slick.Config;

  ngOnInit(): void {

    this.config = {
      slidesToShow: 1,
      arrows: false,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: false,
      autoplay:true,
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            adaptiveHeight: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 999,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            adaptiveHeight: false,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            adaptiveHeight: false,
            slidesToShow: 5,
          },
        },
      ],
    };
    this.slideItems = [
      {
        id: 1,
        src: 'https://via.placeholder.com/600',
        alt: 'Mobile Internet',
        title: 'Mobile Internet',
      },
      {
        id: 2,
        src: 'https://via.placeholder.com/600',
        alt: 'Home Internet',
        title: 'Home Internet',
        width: '162',
      },
      {
        id: 3,
        src: 'https://via.placeholder.com/600',
        alt: 'Get a device',
        title: 'Get a device',
        width: '162',
      },
      {
        id: 4,
        src: 'https://via.placeholder.com/600',
        alt: 'Add a phone-line',
        title: 'Add a phone-line',
        width: '162',
      },
      {
        id: 5,
        src: 'https://via.placeholder.com/600',
        alt: 'Upgrade',
        title: 'Upgrade',
        width: '162',
      },
    ];
  }
}
