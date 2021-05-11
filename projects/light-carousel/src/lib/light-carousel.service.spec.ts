import { TestBed } from '@angular/core/testing';

import { LightCarouselService } from './light-carousel.service';

describe('LightCarouselService', () => {
  let service: LightCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
