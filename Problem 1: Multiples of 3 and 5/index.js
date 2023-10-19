function steps(number, sumOfNumber) {
  return Math.ceil(number / sumOfNumber) - 1;
}

function sum(sumOfNumber, steps) {
  return sumOfNumber * ((steps * (steps + 1)) / 2);
}

const number = 19564;

const stepsFor3 = steps(number, 3);
const stepsFor5 = steps(number, 5);
const stepsFor15 = steps(number, 15);

console.log(sum(3, stepsFor3) + sum(5, stepsFor5) - sum(15, stepsFor15));
