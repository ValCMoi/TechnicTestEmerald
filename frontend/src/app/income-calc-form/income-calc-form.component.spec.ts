import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeCalcFormComponent } from './income-calc-form.component';

describe('IncomeCalcFormComponent', () => {
  let component: IncomeCalcFormComponent;
  let fixture: ComponentFixture<IncomeCalcFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncomeCalcFormComponent]
    });
    fixture = TestBed.createComponent(IncomeCalcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
