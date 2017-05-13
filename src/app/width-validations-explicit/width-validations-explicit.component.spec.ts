import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidthValidationsExplicitComponent } from './width-validations-explicit.component';

describe('WidthValidationsExplicitComponent', () => {
  let component: WidthValidationsExplicitComponent;
  let fixture: ComponentFixture<WidthValidationsExplicitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidthValidationsExplicitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidthValidationsExplicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
