import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Glowne } from './glowne';

describe('Glowne', () => {
  let component: Glowne;
  let fixture: ComponentFixture<Glowne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Glowne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Glowne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
