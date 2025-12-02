import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BazyDanych } from './bazy-danych';

describe('BazyDanych', () => {
  let component: BazyDanych;
  let fixture: ComponentFixture<BazyDanych>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BazyDanych]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BazyDanych);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
