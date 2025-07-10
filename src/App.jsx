import React, { useState } from "react";
import { calculateFinalBalance, timesPaidPerYear } from "./calculator.js";
import "./App.css";

const objectValidator = {
  deposit: {
    min: 1000,
    max: 1500000,
    step: 1,
  },
  interestRate: {
    min: 0,
    max: 15,
    step: 0.01,
  },
  investmentTerm: {
    min: 12,
    max: 120,
    step: 1,
  },
  interestPaidFrequency: {
    min: 1,
    max: 4,
    step: 1,
  },
};

function App() {
  const [result, setResult] = useState(0);
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const calculatorData = {
      deposit: parseInt(formData.get("deposit"), 10),
      interestRate: parseFloat(formData.get("interestRate")),
      investmentTerm: parseInt(formData.get("investmentTerm"), 10),
      interestPaidFrequency:
        timesPaidPerYear[formData.get("interestPaidFrequency")],
    };
    setResult(calculateFinalBalance(calculatorData));
  };

  const inputRangeInfo = (key) =>
    `a number between ${objectValidator[key].min} and ${objectValidator[key].max} with a step of ${objectValidator[key].step}`;

  return (
    <>
      <h1>Term Deposit Calculator</h1>
      <div className="container">
        <form className="form" onSubmit={submitHandler}>
          <p>{inputRangeInfo("deposit")}</p>
          <input
            type="number"
            placeholder="starting deposit"
            name="deposit"
            {...objectValidator.deposit}
          />
          <p>{inputRangeInfo("interestRate")}</p>
          <input
            type="number"
            placeholder="interest rate"
            name="interestRate"
            {...objectValidator.interestRate}
          />
          <p>{inputRangeInfo("investmentTerm")}</p>
          <input
            type="number"
            placeholder="investment term (month)"
            name="investmentTerm"
            {...objectValidator.investmentTerm}
          />
          <p>1. Monthly 2. Quarterly 3. Annually 4. At Maturity</p>
          <input
            type="number"
            placeholder="pay frequency"
            name="interestPaidFrequency"
            {...objectValidator.interestPaidFrequency}
          />
          <button type="submit">Submit</button>
        </form>
        {result > 0 && <p>final Balance {result}</p>}
      </div>
    </>
  );
}

export default App;
