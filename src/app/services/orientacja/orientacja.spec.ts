import { TestBed } from '@angular/core/testing';

import { Orientacja } from './orientacja';

describe('Orientacja', () => {
  let service: Orientacja;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Orientacja);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
