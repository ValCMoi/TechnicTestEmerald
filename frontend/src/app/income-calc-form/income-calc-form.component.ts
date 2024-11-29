import { takeUntil, Subject } from 'rxjs';
import { FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, inject } from '@angular/core';
import { CalcIncomeService } from '../core/services/calc/calc-income/calc-income.service';
import { YearResult } from '../core/models/calc-format';

@Component({
  selector: 'app-income-calc-form',
  templateUrl: './income-calc-form.component.html',
  styleUrls: ['./income-calc-form.component.scss'],
})
export class IncomeCalcFormComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject();
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    purchasePrice: new FormControl(0),
    monthlyRent: new FormControl(0),
    annualRentalFee: new FormControl(0),
    agencyCommissionFirst: new FormControl(30),
    agencyCommissionSecond: new FormControl(25),
    agencyCommissionThird: new FormControl(20),
  });

  constructor(private readonly calcService: CalcIncomeService) {}

  products: any[] = [];

  calcAllNetMensualIncome: YearResult[] = [];
  calcAllNetEfficiency: YearResult[] = [];

  ngOnInit() {
    this.form.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        this.calcAllNetMensualIncome = this.calcService.calcNetMensualIncomeAll(
          {
            monthlyRent: res.monthlyRent ?? 0,
            monthlyRentalFee: (res.annualRentalFee ?? 0) / 12,
            agencyCommissions: [
              res.agencyCommissionFirst ?? 0,
              res.agencyCommissionSecond ?? 0,
              res.agencyCommissionThird ?? 0,
            ],
          }
        );

        this.calcAllNetEfficiency = this.calcService.calcAllNetEfficiency({
          purchasePrice:res.purchasePrice ?? 0,
          monthlyRent: res.monthlyRent ?? 0,
          monthlyRentalFee: (res.annualRentalFee ?? 0) / 12,
          agencyCommissions: [
            res.agencyCommissionFirst ?? 0,
            res.agencyCommissionSecond ?? 0,
            res.agencyCommissionThird ?? 0
          ]
        });
      });
  }
}
