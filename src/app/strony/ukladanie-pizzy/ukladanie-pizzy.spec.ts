import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkladaniePizzy } from './ukladanie-pizzy';

describe('UkladaniePizzy', () => {
  let component: UkladaniePizzy;
  let fixture: ComponentFixture<UkladaniePizzy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UkladaniePizzy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UkladaniePizzy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
