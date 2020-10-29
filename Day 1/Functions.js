function factorial(num) {
  let i,
    sum = 1;
  for (i = num; i > 1; i--) {
    sum *= i;
  }
  return sum;
}
