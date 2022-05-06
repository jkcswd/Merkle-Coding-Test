const balance = (openingSum, interestRate, taxFreeLimit, taxRate, numMonths) => {
  let finalBalance = openingSum;

  for (let i = 0; i < numMonths; i++) {
    const monthlyInterestPercentInDecimal = (interestRate / 100) ;
    const monthlyTaxPercentInDecimal = (taxRate / 100) ;
    const taxableAmount = finalBalance - taxFreeLimit;
    const monthlyInterest = finalBalance * monthlyInterestPercentInDecimal;
    let monthlyTax = 0;

    if (taxableAmount > 0) {
      monthlyTax = taxableAmount * monthlyTaxPercentInDecimal;
    } 
    
    finalBalance += monthlyInterest;
    finalBalance -= monthlyTax;
  }
  
  return finalBalance;
}
