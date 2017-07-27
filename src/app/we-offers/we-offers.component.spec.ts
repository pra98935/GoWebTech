import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeOffersComponent } from './we-offers.component';

describe('WeOffersComponent', () => {
  let component: WeOffersComponent;
  let fixture: ComponentFixture<WeOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
