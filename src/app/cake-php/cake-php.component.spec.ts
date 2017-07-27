import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakePhpComponent } from './cake-php.component';

describe('CakePhpComponent', () => {
  let component: CakePhpComponent;
  let fixture: ComponentFixture<CakePhpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakePhpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakePhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
