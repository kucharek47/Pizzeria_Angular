import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Linux } from './linux';

describe('Linux', () => {
  let component: Linux;
  let fixture: ComponentFixture<Linux>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Linux]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Linux);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
