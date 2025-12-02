import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Narzedzia } from './narzedzia';

describe('Narzedzia', () => {
  let component: Narzedzia;
  let fixture: ComponentFixture<Narzedzia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Narzedzia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Narzedzia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
