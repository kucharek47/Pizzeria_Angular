import { TestBed } from '@angular/core/testing';

import { DodanieDoKoszyka } from './dodanie-do-koszyka';

describe('DodanieDoKoszyka', () => {
  let service: DodanieDoKoszyka;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DodanieDoKoszyka);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
