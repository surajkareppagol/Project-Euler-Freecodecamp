function findSumOfEvenFN(n) {
  let sum = 0;
  let leftNumber = 1;
  let rightNumber = leftNumber;

  for (let j = 1; ; j++) {
    const resultNumber = leftNumber + rightNumber;
    leftNumber = rightNumber;
    rightNumber = resultNumber;

    if (resultNumber > n) break;
    if (resultNumber % 2 === 0) sum += resultNumber;
  }

  console.log(sum);
}

const n = 4000000;

findSumOfEvenFN(n);
