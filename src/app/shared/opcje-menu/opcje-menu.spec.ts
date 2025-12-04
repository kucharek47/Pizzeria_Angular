import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcjeMenu } from './opcje-menu';

describe('OpcjeMenu', () => {
  let component: OpcjeMenu;
  let fixture: ComponentFixture<OpcjeMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpcjeMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcjeMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
