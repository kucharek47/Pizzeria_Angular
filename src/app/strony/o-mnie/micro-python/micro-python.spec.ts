import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroPython } from './micro-python';

describe('MicroPython', () => {
  let component: MicroPython;
  let fixture: ComponentFixture<MicroPython>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroPython]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroPython);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
