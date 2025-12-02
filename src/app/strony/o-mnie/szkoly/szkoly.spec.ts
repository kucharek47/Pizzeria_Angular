import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Szkoly } from './szkoly';

describe('Szkoly', () => {
  let component: Szkoly;
  let fixture: ComponentFixture<Szkoly>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Szkoly]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Szkoly);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
