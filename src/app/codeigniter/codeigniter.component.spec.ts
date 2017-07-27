import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeigniterComponent } from './codeigniter.component';

describe('CodeigniterComponent', () => {
  let component: CodeigniterComponent;
  let fixture: ComponentFixture<CodeigniterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeigniterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeigniterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
