import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoomlaComponent } from './joomla.component';

describe('JoomlaComponent', () => {
  let component: JoomlaComponent;
  let fixture: ComponentFixture<JoomlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoomlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoomlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
