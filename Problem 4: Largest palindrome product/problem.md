# Problem 4: Largest palindrome product

Find the largest palindrome made from the product of two n-digit numbers.

The method used here is again `brute force method`. From `largestPalindrome()` i am calculating the start and end of given number `n`, for example if `n` is equal to 2 then start and end will be `11`, `99` respectively. Then with nested loop i am multiplying two loop variables then passing it to the `isPalindromeFunc()`.

```js
const start = Math.pow(10, number - 1);
const end = Math.pow(10, number);
```

Here it will convert it into string and check if it is palindrome, if yes then it will return 1, or else return 0. Then it is used to check if the current palindrome is the largest if yes it is then saved.

```js
function isPalindromeFunc(number) {
  const str = String(number);
  const strReversed = str.split("").reverse().join("");

  if (str === strReversed) return 1;
  return 0;
}
```

At the end the largest palindrome is console logged.

Although it works but for `n` value 4 it will take a lot of time, therefore it is definitely not an optimal solution.

`Largest palindrome made from the product of two 2-digit numbers is 9009.`

`Largest palindrome made from the product of two 2-digit numbers is 906609.`

The `index.js` contains the code, change the `n` variable to provide a the value.
