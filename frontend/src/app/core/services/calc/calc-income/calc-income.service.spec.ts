import { TestBed } from '@angular/core/testing';

import { CalcIncomeService } from './calc-income.service';

describe('CalcIncomeService', () => {
  let service: CalcIncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcIncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
