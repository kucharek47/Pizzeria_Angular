import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OLokalu } from './o-lokalu';

describe('OLokalu', () => {
  let component: OLokalu;
  let fixture: ComponentFixture<OLokalu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OLokalu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OLokalu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
