import {
  Component,
  Input,
  OnInit,
  ElementRef,
  AfterViewInit,
  ViewChild,
  AfterContentInit,
  HostListener,
} from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'mtn-light-carousel',
  template: `
    <div class="lc-wrapper" *ngIf="isLoaded">
      <div class="lc-title">
        <ng-content></ng-content>
      </div>
      <div class="carousel">
        <div class="carousel-content">
          <div *ngFor="let item of items" class="slide">
            <picture class="lc__slide-img">
              <img src="{{ item.src }}" />
            </picture>
            <div class="lc__slide-title">
              <h3>{{ item.title }}</h3>
            </div>
            <a class="lc__slide-link" href="item.url">Start here</a>
          </div>
        </div>
      </div>
      <div class="nav-wrapper">
        <button (click)="moveRight()" class="nav nav-left">
          <img src="assets/images/arrow_back.svg" />
        </button>
        <button (click)="moveLeft()" class="nav nav-right">
          <img src="assets/images/arrow_forward.svg" />
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./scss/light-carousel.component.scss'],
})
export class LightCarouselComponent implements OnInit, AfterViewInit {
  public elementRef: ElementRef;
  public arrayOfSlides = [];
  public carouselDisplaying;
  public screenSize;
  public carousel;
  public lengthOfSlide: number = 0;
  public carouselContent;
  public slides;
  public carouselElements;
  public rightNav;
  public leftNav;
  public initialX;
  public initialPos = [];
  public initialWidth;
  public firstSlide;
  public moving = true;
  public isLoaded = true;

  @Input() title: string = '';
  @Input() items: any = [];
  @Input() configOptions: any;
  @ViewChild('nextSlide') nextSlide;
  subtitle;
  config: any;

  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;

  constructor(private el: ElementRef) {}

  // Public methods
  public ngOnInit() {
    if (this.configOptions) {
      this.config = this.configOptions;
    }
  }

  ngAfterViewInit() {
    this.initializeCarousel();
  }

  private addElClone() {
    this.carouselContent = document.querySelector('.carousel-content');
    var lastSlide = this.carouselContent.lastElementChild.cloneNode(true);
    if (this.carouselDisplaying >= 5) {
      lastSlide.style.left = -this.lengthOfSlide + 'px';
    } else if (this.carouselDisplaying == 3) {
    } else {
      lastSlide.style.left = -this.lengthOfSlide + 230 + 'px';
    }
    this.carouselContent.insertBefore(
      lastSlide,
      this.carouselContent.firstChild
    );
    lastSlide = this.carouselContent.lastElementChild.cloneNode(true);
  }

  removeClone() {
    var firstSlide = this.carouselContent.firstElementChild;
    firstSlide.parentNode.removeChild(firstSlide);
  }

  moveSlidesRight() {
    var slides = document.querySelectorAll('.slide');
    var slidesArray = Array.prototype.slice.call(slides);
    let width = 0;
    let lengthOfSlide = this.lengthOfSlide;
    if (this.carouselDisplaying >= 5) {
      slidesArray.forEach((el, i) => {
        el.style.left = width + 'px';
        el.classList.remove(
          'red-border',
          'blue-border',
          'green-border',
          'active'
        );
        if (i == 2) {
          el.classList.add('red-border', 'active');
          el.style.left = width + 50 + 'px';
        } else if (i == 1) {
          el.classList.add('blue-border');
          el.style.left = width - 20 + 'px';
        } else if (i == 0) {
          el.style.left = width + 20 + 'px';
        } else if (i == 3) {
          el.classList.add('green-border');
          el.style.left = width + 120 + 'px';
        } else if (i == 4) {
          el.style.left = width + 80 + 'px';
        }

        width += lengthOfSlide;
      });
    } else if (this.carouselDisplaying == 3) {
      slidesArray.forEach((el, i) => {
        el.style.left = width + 'px';
        el.classList.remove(
          'red-border',
          'blue-border',
          'green-border',
          'active'
        );
        if (i == 2) {
          el.classList.add('green-border');
          el.style.left = width + 90 + 'px';
        } else if (i == 1) {
          el.classList.add('red-border', 'active');
          el.style.left = width + 30 + 'px';
        } else if (i == 0) {
          el.classList.add('blue-border');
          el.style.left = width - 30 + 'px';
        } else if (i == 3) {
          el.classList.add('green-border');
          el.style.left = width + 150 + 'px';
        } else if (i == 4) {
          el.classList.add('green-border');
          el.style.left = width + 'px';
        } else {
          el.style.left = 0 + 'px';
        }

        width += lengthOfSlide;
      });
    } else {
      slidesArray.forEach((el, i) => {
        el.style.left = width + 'px';
        el.classList.remove(
          'red-border',
          'blue-border',
          'green-border',
          'active'
        );
        if (i == 2) {
          el.classList.add('red-border');
          el.style.left = width + 'px';
        } else if (i == 1) {
          el.classList.add('blue-border');
          el.style.left = width + 'px';
        } else if (i == 0) {
          el.classList.add('red-border', 'active');
          el.style.left = width + 115 + 'px';
        } else if (i == 3) {
          el.classList.add('green-border');
          el.style.left = width + 150 + 'px';
        } else if (i == 4) {
          el.classList.add('green-border');
          el.style.left = width + 'px';
        } else {
          el.style.left = 0 + 'px';
        }
        width += lengthOfSlide;
      });
    }
    this.addElClone();
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    this.isLoaded = false;
    setTimeout(() => {
      this.isLoaded = true;
    }, 0);

    setTimeout(() => {
      this.initializeCarousel();
    }, 1);
  }

  public initializeCarousel() {
    this.carousel = document.querySelector('.carousel');
    this.carouselContent = document.querySelector('.carousel-content');
    this.slides = document.querySelectorAll('.slide');
    this.arrayOfSlides = Array.prototype.slice.call(this.slides);

    this.setScreenSize(window.innerWidth);
    this.moveSlidesRight();
    this.moveLeft();
  }

  moveSlidesLeft() {
    var slides = document.querySelectorAll('.slide');
    var slidesArray = Array.prototype.slice.call(slides);
    slidesArray = slidesArray.reverse();
    var maxWidth = (slidesArray.length - 1) * this.lengthOfSlide;
    let lengthOfSlide = this.lengthOfSlide;

    if (this.carouselDisplaying >= 5) {
      slidesArray.forEach(function (el, i) {
        maxWidth -= lengthOfSlide - 20;
        el.classList.remove(
          'red-border',
          'blue-border',
          'green-border',
          'active'
        );
        if (i == 2) {
          el.classList.add('red-border');

          el.style.left = maxWidth - 80 + 'px';
        } else if (i == 3) {
          el.style.left = maxWidth - 60 + 'px';
        } else if (i == 4) {
          el.classList.add('blue-border');
          el.style.left = maxWidth + 150 + 'px';
        } else if (i == 0) {
          el.classList.add('green-border');

          el.style.left = maxWidth + 100 + 'px';
        } else {
          el.classList.add('active');
          el.style.left = maxWidth + 10 + 'px';
        }
      });
    } else if (this.carouselDisplaying == 3) {
      slidesArray.forEach(function (el, i) {
        maxWidth -= lengthOfSlide - 20;
        el.classList.remove(
          'red-border',
          'blue-border',
          'green-border',
          'active'
        );
        if (i == 2) {
          el.classList.add('red-border', 'active');
          el.style.left = maxWidth - 30 + 'px';
        } else if (i == 3) {
          el.classList.add('blue-border');
          el.style.left = maxWidth - 110 + 'px';
        } else if (i == 4) {
          el.classList.add('green-border');
          el.style.left = maxWidth + 'px';
        } else if (i == 0) {
          el.classList.add('green-border');
          el.style.left = maxWidth + 80 + 'px';
        } else {
          el.style.left = maxWidth + 50 + 'px';
        }
      });
    } else {
      slidesArray.forEach(function (el, i) {
        maxWidth -= lengthOfSlide - 20;
        el.classList.remove(
          'red-border',
          'blue-border',
          'green-border',
          'active'
        );
        if (i == 2) {
          el.classList.add('blue-border');
          el.style.left = maxWidth - 65 + 'px';
        } else if (i == 3) {
          el.classList.add('red-border', 'active');
          el.style.left = maxWidth + 35 + 'px';
        } else if (i == 4) {
          el.classList.add('green-border');
          el.style.left = maxWidth + 100 + 'px';
        } else if (i == 0) {
          el.classList.add('green-border');
          el.style.left = maxWidth + 80 + 'px';
        } else {
          el.style.left = maxWidth + 'px';
        }
      });
    }
  }

  setScreenSize(width: number) {
    if (width >= 1200) {
      this.carouselDisplaying = 5;
    } else if (width >= 768 && width < 1200) {
      this.carouselDisplaying = 3;
    } else {
      this.carouselDisplaying = 1;
    }
    this.getScreenSize();
  }

  getScreenSize() {
    var slides = document.querySelectorAll('.slide');
    var slidesArray = Array.prototype.slice.call(slides);

    this.lengthOfSlide =
      this.carousel.offsetWidth / this.carouselDisplaying - 10;

    let lengthOfSlide = this.lengthOfSlide;
    let initialWidth = -this.lengthOfSlide;
    let width = this.lengthOfSlide - 35;

    if (this.carouselDisplaying >= 3) {
      slidesArray.forEach(function (el, i) {
        if (lengthOfSlide > 0) {
          el.style.width = 216 + 'px';
          el.style.left = el.offsetWidth + 'px';
          initialWidth += lengthOfSlide;
        }
      });
    } else {
      slidesArray.forEach(function (el, i) {
        if (lengthOfSlide > 0) {
          el.style.width = width / 2 + 'px';
          el.style.left = el.offsetWidth + 'px';
          initialWidth += lengthOfSlide;
        }
      });
    }
  }

  moveRight() {
    if (this.moving) {
      //this.moving = false;
      this.carouselContent = document.querySelector('.carousel-content');
      var lastSlide = this.carouselContent.lastElementChild;
      lastSlide.parentNode.removeChild(lastSlide);
      this.carouselContent.insertBefore(
        lastSlide,
        this.carouselContent.firstChild
      );
      this.removeClone();
      var firstSlide = this.carouselContent.firstElementChild;
      firstSlide.addEventListener('transitionend', this.activateAgain);
      this.moveSlidesRight();
    }
  }

  activateAgain() {
    this.carouselContent = document.querySelector('.carousel-content');
    var firstSlide = this.carouselContent.firstElementChild;
    firstSlide.removeEventListener('transitionend', this.activateAgain);
  }

  moveLeft() {
    if (this.moving) {
      this.removeClone();
      var firstSlide = this.carouselContent.firstElementChild;
      firstSlide.addEventListener('transitionend', this.replaceToEnd);
      this.moveSlidesLeft();
    }
  }

  public replaceToEnd = () => {
    this.carouselContent = document.querySelector('.carousel-content');
    this.slides = document.querySelectorAll('.slide');
    this.arrayOfSlides = Array.prototype.slice.call(this.slides);
    var firstSlide = this.carouselContent.firstElementChild;
    firstSlide.parentNode.removeChild(firstSlide);
    this.carouselContent.appendChild(firstSlide);
    if (this.carouselDisplaying == 3) {
      firstSlide.style.left =
        (this.arrayOfSlides.length - 1) * this.lengthOfSlide - 100 + 'px';
    } else {
      firstSlide.style.left =
        (this.arrayOfSlides.length - 1) * this.lengthOfSlide + 80 + 'px';
    }
    this.addElClone();
    this.moving = true;
    firstSlide.removeEventListener('transitionend', this.replaceToEnd);
  };

  seeMovement(e) {
    this.initialX = e.clientX;
    this.getInitialPos();
    this.carouselContent.addEventListener('mousemove', (e) =>
      this.slightMove(e)
    );
    document.addEventListener('mouseup', (e) => this.moveBasedOnMouse(e));
  }

  slightMove(e) {
    if (this.moving) {
      var movingX = e.clientX;
      var difference = this.initialX - movingX;
      if (Math.abs(difference) < this.lengthOfSlide / 4) {
        this.slightMoveSlides(difference);
      }
    }
  }

  getInitialPos() {
    var slides = document.querySelectorAll('.slide');
    var slidesArray = Array.prototype.slice.call(slides);
    this.initialPos = [];
    slidesArray.forEach(function (el) {
      var left = Math.floor(parseInt(el.style.left.slice(0, -2)));
      this.initialPos.push(left);
    });
  }

  slightMoveSlides(newX) {
    var slides = document.querySelectorAll('.slide');
    var slidesArray = Array.prototype.slice.call(slides);
    slidesArray.forEach(function (el, i) {
      var oldLeft = this.initialPos[i];
      el.style.left = oldLeft + newX + 'px';
    });
  }

  moveBasedOnMouse(e) {
    var finalX = e.clientX;
    if (this.initialX - finalX > 0) {
      this.moveRight();
    } else if (this.initialX - finalX < 0) {
      this.moveLeft();
    }
    document.removeEventListener('mouseup', (e) => this.moveBasedOnMouse(e));
    this.carouselContent.removeEventListener('mousemove', (e) =>
      this.slightMove(e)
    );
  }

  public removeClassByPrefix = (node, prefix) => {
    let regx = new RegExp('\\b' + prefix + '[^ ]*[ ]?\\b', 'g');
    node.className = node.className.replace(regx, '');
    return node;
  };
}
