import { TestBed, inject } from '@angular/core/testing';

import { CarCleanService } from './car-clean.service';

describe('CarCleanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarCleanService]
    });
  });

  it('should be created', inject([CarCleanService], (service: CarCleanService) => {
    expect(service).toBeTruthy();
  }));
});
