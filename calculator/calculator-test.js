
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 5000, years: 3, rate: 2.5 };
  expect(calculateMonthlyPayment(values).toEqual('144.31'))
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 14000, years: 3, rate: 2.5 };
  expect(calculateMonthlyPayment(values)).toEqual('404.36');
});

it("should return a result with 2 decimal places", function() {
  const values = {amount: 500000, years: 100, rate: 50 };
  expect(calculateMonthlyPayment(values)).toEqual('20833.33');
});

