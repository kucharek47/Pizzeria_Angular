import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OMnie } from './o-mnie';

describe('OMnie', () => {
  let component: OMnie;
  let fixture: ComponentFixture<OMnie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OMnie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OMnie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
