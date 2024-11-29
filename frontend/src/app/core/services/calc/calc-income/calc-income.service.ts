import { Injectable } from '@angular/core';
import { CalcAllNetEfficiencyFormat, CalcNetEfficiencyFormat, CalcNetMensualIncomeAllFormat, CalcNetMensualIncomeFormat, YearResult } from 'src/app/core/models/calc-format';

@Injectable({
  providedIn: 'root',
})
export class CalcIncomeService {
  calcNetMensualIncome(calcInput: CalcNetMensualIncomeFormat): number {
    return (
      calcInput.monthlyRent -
      calcInput.monthlyRentalFee -
      (calcInput.monthlyRent * calcInput.agencyCommission) / 100
    );
  }

  calcNetEfficiencyOneYear(calcInput: CalcNetEfficiencyFormat): number {
    return(
      100 * ((12 * this.calcNetMensualIncome(calcInput))/calcInput.purchasePrice)
    )
  }

  calcNetMensualIncomeAll(calcInput: CalcNetMensualIncomeAllFormat): YearResult[]{
    let res: YearResult[] = [];
    let idxYear = 0;
    calcInput.agencyCommissions.forEach(commission => {
      const bodyCalcOfOneYear:CalcNetMensualIncomeFormat = {
        monthlyRent: calcInput.monthlyRent,
        monthlyRentalFee: calcInput.monthlyRentalFee,
        agencyCommission:commission
      }
      res.push({
        year:idxYear,
        result: this.calcNetMensualIncome(bodyCalcOfOneYear)
      })

      idxYear++
    })

    return res;
  }

  calcAllNetEfficiency(calcInput :CalcAllNetEfficiencyFormat):YearResult[]{
    let res: YearResult[] = [];
    let idxYear = 0;
    calcInput.agencyCommissions.forEach(commission => {
      const bodyCalcOfOneYear:CalcNetEfficiencyFormat = {
        purchasePrice:calcInput.purchasePrice,
        monthlyRent: calcInput.monthlyRent,
        monthlyRentalFee: calcInput.monthlyRentalFee,
        agencyCommission:commission
      }
      res.push({
        year:idxYear,
        result: this.calcNetEfficiencyOneYear(bodyCalcOfOneYear)
      })

      idxYear++
    })

    return res;
  }
}
