import { calculateFinalBalance } from "./calculator.js";
import { describe, test, expect } from "vitest";
export const testCases = [
  {
    deposit: 1000,
    interestRate: 0,
    investmentTerm: 12,
    interestPaidFrequency: 4, // quarterly
    expected: 1000,
  },
  {
    deposit: 1000,
    interestRate: 0,
    investmentTerm: 12,
    interestPaidFrequency: 12, // annually
    expected: 1000,
  },
  {
    deposit: 1000,
    interestRate: 0,
    investmentTerm: 12,
    interestPaidFrequency: 1, // monthly
    expected: 1000,
  },
  {
    deposit: 1000,
    interestRate: 0,
    investmentTerm: 12,
    interestPaidFrequency: -1, // at maturity
    expected: 1000,
  },
  {
    deposit: 1500000,
    interestRate: 15,
    investmentTerm: 60,
    interestPaidFrequency: -1, // at maturity
    expected: 2625000,
  },
  {
    deposit: 1500000,
    interestRate: 15,
    investmentTerm: 60,
    interestPaidFrequency: 1, // annually
    expected: 3017036,
  },
  {
    deposit: 1500000,
    interestRate: 15,
    investmentTerm: 60,
    interestPaidFrequency: 4, // quarterly
    expected: 3132228,
  },
  {
    deposit: 1500000,
    interestRate: 15,
    investmentTerm: 60,
    interestPaidFrequency: 12, // monthly
    expected: 3160772,
  },
  {
    deposit: 100000,
    interestRate: 4.12,
    investmentTerm: 15,
    interestPaidFrequency: -1, // at maturity
    expected: 105150,
  },
  {
    deposit: 100000,
    interestRate: 4.12,
    investmentTerm: 15,
    interestPaidFrequency: 1, // yearly
    expected: 105176,
  },
  {
    deposit: 100000,
    interestRate: 4.12,
    investmentTerm: 15,
    interestPaidFrequency: 4, // quarterly
    expected: 105257,
  },
  {
    deposit: 100000,
    interestRate: 4.12,
    investmentTerm: 15,
    interestPaidFrequency: 12, // monthly
    expected: 105276,
  },
];

describe("calculateFinalBalance", () => {
  test.each(testCases)(
    `should show $expected for deposit $deposit, interest rate $interestRate, investment term $investmentTerm, and interest paid frequency $interestPaidFrequency`,
    ({
      deposit,
      interestRate,
      investmentTerm,
      interestPaidFrequency,
      expected,
    }) => {
      const result = calculateFinalBalance({
        deposit,
        interestRate,
        investmentTerm,
        interestPaidFrequency,
      });
      expect(result).toBe(expected);
    },
  );
});
