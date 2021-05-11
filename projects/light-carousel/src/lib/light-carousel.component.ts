import { Component, Input, OnInit,ElementRef, AfterViewInit, ViewChild, AfterContentInit } from '@angular/core';

import {Slick } from 'ngx-slickjs';

@Component({
  selector: 'mtn-light-carousel',
  template: `
  <div class="lc-wrapper">
  <div class="lc-title">
    <ng-content></ng-content>
  </div>
  <div slickContainer #slickController="slick" [slickConfig]="config">
    <ng-container *ngIf="slickController.initialize">
      <div slickItem *ngFor="let slide of slideItems" class="slide">
        <div class="lc__slide">
          <picture class="lc__slide-img">
         
          </picture>
          <div class="lc__slide-title">
            <h3>{{ slide.title }}</h3>
          </div>
          <a
            class="lc__slide-link"
            >Start here</a
          >
        </div>
      </div>
    </ng-container>
  </div>

  <div class="lc-actions">
    <button
      class="lc-action-prev swiper-navigation-prev"
      (click)="slickController.prev()"
    >
      <img src="assets/images/arrow_back.svg" />
    </button>
    <button #nextSlide
      class="lc-action-next swiper-navigation-next"
      (click)="slickController.next()"
    >
      <img src="/assets/images/arrow_forward.svg" />
    </button>
  </div>
</div>
  `,
  styleUrls: ['./scss/light-carousel.component.scss']
})
export class LightCarouselComponent implements OnInit ,AfterViewInit{

  constructor(private el: ElementRef) { 

    //this.el.nativeElement.querySelector('.')
  }

  config:Slick.Config;

  @Input() title: string = '';
  @Input() slideItems: any = [];
  @Input() configOptions:any;
  @ViewChild('nextSlide') nextSlide;

  // Public methods
  public ngOnInit() {
    if (this.configOptions) {
      this.config = this.configOptions;
    }
  }

  public ngAfterViewInit() {
     this.nextSlide.nativeElement.dispatchEvent(new Event('click'));
  }
}
