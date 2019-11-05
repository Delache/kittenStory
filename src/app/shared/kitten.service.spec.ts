import { TestBed } from '@angular/core/testing';

import { KittenService } from './kitten.service';

describe('KittenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KittenService = TestBed.get(KittenService);
    expect(service).toBeTruthy();
  });
});
