export const calculateFinalBalance = ({
  deposit,
  interestRate,
  investmentTerm,
  interestPaidFrequency,
}) => {
  let finalBalance = 0;
  if (isPaidAtMaturity(interestPaidFrequency)) {
    console.log("at maturity");
    finalBalance = deposit * (1 + (interestRate / 100) * (investmentTerm / 12));
  } else {
    finalBalance =
      deposit *
      Math.pow(
        1 + interestRate / 100 / interestPaidFrequency,
        interestPaidFrequency * (investmentTerm / 12),
      );
  }
  return Math.round(finalBalance);
};

export const timesPaidPerYear = {
  1: 12, // 1 : monthly : 12 per year
  2: 4, // 2: quarterly : 4 per year
  3: 1, // 3: annually : 1 per year
  4: -1, // 4: at maturity
};

function isPaidAtMaturity(interestPaidFrequency) {
  return interestPaidFrequency === -1;
}
