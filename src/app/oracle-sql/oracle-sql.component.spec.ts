import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OracleSqlComponent } from './oracle-sql.component';

describe('OracleSqlComponent', () => {
  let component: OracleSqlComponent;
  let fixture: ComponentFixture<OracleSqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OracleSqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OracleSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
