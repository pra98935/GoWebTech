import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YiiFrameworkComponent } from './yii-framework.component';

describe('YiiFrameworkComponent', () => {
  let component: YiiFrameworkComponent;
  let fixture: ComponentFixture<YiiFrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YiiFrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YiiFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
