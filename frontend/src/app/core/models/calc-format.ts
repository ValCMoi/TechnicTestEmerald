export interface CalcNetMensualIncomeFormat {
  monthlyRent: number;
  monthlyRentalFee: number;
  agencyCommission: number;
}
export interface CalcNetMensualIncomeAllFormat {
  monthlyRent: number;
  monthlyRentalFee: number;
  agencyCommissions: number[];
}

export interface CalcNetEfficiencyFormat {
  monthlyRent: number;
  monthlyRentalFee: number;
  agencyCommission: number;
  purchasePrice: number;
}

export interface CalcAllNetEfficiencyFormat {
  monthlyRent: number;
  monthlyRentalFee: number;
  agencyCommissions: number[];
  purchasePrice: number;
}

export interface YearResult {
  year: number;
  result: number;
}
