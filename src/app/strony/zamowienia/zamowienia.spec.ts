import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zamowienia } from './zamowienia';

describe('Zamowienia', () => {
  let component: Zamowienia;
  let fixture: ComponentFixture<Zamowienia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zamowienia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zamowienia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
