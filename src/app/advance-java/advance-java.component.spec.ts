import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceJavaComponent } from './advance-java.component';

describe('AdvanceJavaComponent', () => {
  let component: AdvanceJavaComponent;
  let fixture: ComponentFixture<AdvanceJavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceJavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
