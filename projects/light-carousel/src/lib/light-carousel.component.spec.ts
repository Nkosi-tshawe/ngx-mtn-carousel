import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightCarouselComponent } from './light-carousel.component';

describe('CarouselComponent', () => {
  let component: LightCarouselComponent;
  let fixture: ComponentFixture<LightCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
      component.subtitle = 'MTN Carousel'
    expect(component).toBeTruthy();
  });
});
