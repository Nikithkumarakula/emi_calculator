import { useMemo } from 'react';

const useEMICalculation = (principal, annualRate, tenureMonths) => {
  const monthlyRate = annualRate / 12 / 100;

  const emi = useMemo(() => {
    if (principal <= 0 || annualRate <= 0 || tenureMonths <= 0) return 0;
    const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths);
    const denominator = Math.pow(1 + monthlyRate, tenureMonths) - 1;
    return numerator / denominator;
  }, [principal, monthlyRate, tenureMonths]);

  const amortizationSchedule = useMemo(() => {
    if (emi === 0) return [];
    let balance = principal;
    const schedule = [];
    for (let month = 1; month <= tenureMonths; month++) {
      const interest = balance * monthlyRate;
      const principalPaid = emi - interest;
      balance -= principalPaid;
      schedule.push({
        month,
        principalPaid,
        interest,
        balance: balance > 0 ? balance : 0,
        emi,
      });
    }
    return schedule;
  }, [emi, principal, monthlyRate, tenureMonths]);

  return { emi, amortizationSchedule };
};

export default useEMICalculation;
