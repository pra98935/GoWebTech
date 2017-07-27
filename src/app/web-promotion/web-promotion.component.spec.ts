import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebPromotionComponent } from './web-promotion.component';

describe('WebPromotionComponent', () => {
  let component: WebPromotionComponent;
  let fixture: ComponentFixture<WebPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
