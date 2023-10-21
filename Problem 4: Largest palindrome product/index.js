// Check if palindrome by converting number into strings

function isPalindromeFunc(number) {
  const str = String(number);
  const strReversed = str.split("").reverse().join("");

  if (str === strReversed) return 1;
  return 0;
}

function largestPalindrome(number) {
  const start = Math.pow(10, number - 1);
  const end = Math.pow(10, number);
  let highestPalindromeNumber = 0;

  for (let i = start; i < end; i++) {
    for (let j = start; j < end; j++) {
      const multiplication = i * j;
      const isPalindrome = isPalindromeFunc(multiplication);

      if (isPalindrome) {
        const currentPalindromeNumber = multiplication;
        highestPalindromeNumber =
          currentPalindromeNumber > highestPalindromeNumber
            ? currentPalindromeNumber
            : highestPalindromeNumber;
      }
    }
  }

  console.log(highestPalindromeNumber);
}

const n = 3;

largestPalindrome(n);
