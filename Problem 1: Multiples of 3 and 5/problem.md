# Problem 1: Multiples of 3 and 5

Find the sum of all the multiples of 3 or 5.

This problem can be solved in `n(1)`.

- `3, 6, 9, 12 ....` Could be written as `3(1 + 2 + 3 + 4 + .....)`
- `5, 10, 15, 20 ....` Could be written as `5(1 + 2 + 3 + 4 + .....)`
- `15, 30, 45, 60 ....` Could be written as `15(1 + 2 + 3 + 4 + .....)`

The formula will be `Sum(3) + Sum(5) - Sum(15)`, as `Sum(3)` includes multiples of 15.

- `1 + 2 + 3 + 4 ....` Can be written as `(n * (n + 1) / 2)`

Therefore `Sum()` will be,

```js
function Sum(sumOfNumber, steps) {
  return sumOfNumber * ((steps * (steps + 1)) / 2);
}
```

Here steps is the `n` in formula `(n * (n + 1) / 2)`.

It can be calculated as,

```js
function Steps(number, sumOfNumber) {
  return Math.ceil(number / sumOfNumber) - 1;
}
```

For example, if `number = 10`, then steps as `3, 1, 0` for `3, 5, 15` respectively, now if we substitute it in formula `(n * (n + 1) / 2)`, we get `10`.

The `index.js` contains the code change the `number` variable to provide a limit.
