import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zainteresowania } from './zainteresowania';

describe('Zainteresowania', () => {
  let component: Zainteresowania;
  let fixture: ComponentFixture<Zainteresowania>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zainteresowania]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zainteresowania);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
