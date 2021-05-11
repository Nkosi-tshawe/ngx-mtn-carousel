import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightCarouselComponent } from './light-carousel.component';

describe('LightCarouselComponent', () => {
  let component: LightCarouselComponent;
  let fixture: ComponentFixture<LightCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
