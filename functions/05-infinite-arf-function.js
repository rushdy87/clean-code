function sumUp(...numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

const total = sumUp(1, 2, 5, -3, 50, 10);
