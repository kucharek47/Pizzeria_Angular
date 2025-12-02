import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prace } from './prace';

describe('Prace', () => {
  let component: Prace;
  let fixture: ComponentFixture<Prace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prace);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
