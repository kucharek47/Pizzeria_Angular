import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeScript } from './type-script';

describe('TypeScript', () => {
  let component: TypeScript;
  let fixture: ComponentFixture<TypeScript>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeScript]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeScript);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
