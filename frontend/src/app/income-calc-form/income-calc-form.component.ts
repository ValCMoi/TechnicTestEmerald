import { MessageService } from 'primeng/api';
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
    purchasePrice: new FormControl(1),
    monthlyRent: new FormControl(0),
    annualRentalFee: new FormControl(0),
    agencyCommissionFirst: new FormControl(30),
    agencyCommissionSecond: new FormControl(25),
    agencyCommissionThird: new FormControl(20),
  });

  constructor(
    private readonly calcService: CalcIncomeService,
    private messageService: MessageService
  ) {}

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

        let resultEfficiency: YearResult[] = [];

        if (res.purchasePrice) {
          this.calcService.calcAllNetEfficiency({
            purchasePrice: res.purchasePrice ?? 1,
            monthlyRent: res.monthlyRent ?? 0,
            monthlyRentalFee: (res.annualRentalFee ?? 0) / 12,
            agencyCommissions: [
              res.agencyCommissionFirst ?? 0,
              res.agencyCommissionSecond ?? 0,
              res.agencyCommissionThird ?? 0,
            ],
          });
        } else {
          resultEfficiency = [];
          this.messageService.add({severity:'error', summary:'Error', detail:'All value must be set by a number, and the purchase must be set'})
        }

        this.calcAllNetEfficiency = resultEfficiency;
      });
  }
}
