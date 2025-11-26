import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Koszyk } from './koszyk';

describe('Koszyk', () => {
  let component: Koszyk;
  let fixture: ComponentFixture<Koszyk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Koszyk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Koszyk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
