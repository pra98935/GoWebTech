import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialTrainingComponent } from './industrial-training.component';

describe('IndustrialTrainingComponent', () => {
  let component: IndustrialTrainingComponent;
  let fixture: ComponentFixture<IndustrialTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustrialTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrialTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
