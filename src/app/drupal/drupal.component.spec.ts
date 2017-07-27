import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrupalComponent } from './drupal.component';

describe('DrupalComponent', () => {
  let component: DrupalComponent;
  let fixture: ComponentFixture<DrupalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrupalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrupalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
