// Take a series of numbers [1, ..., 10] add them together then square it. We will call this X. Now take that same series of numbers
// [1,...,10], square each number in the series, then add them together. Call this Y. X - Y is the answer. Now do that for [1,...,100].
// Basically, find the diff between the square of the sum, and the sum of the squares.

const arrayOneToN = (n) => Array.from(Array(n).keys()).map(x => x+1);

const oneToAHundred = arrayOneToN(100);

const squareArray = (arr) => arr.map(el => el*el);

const sumArray = (arr) => arr.reduce((a,b) => a+b);

const sumOfSquares = (arr) => sumArray(squareArray(arr));

const squareOfSum = (arr) => Math.pow(sumArray(arr), 2);

const ssDiff = (arr) => squareOfSum(arr) - sumOfSquares(arr);

const answer = ssDiff(oneToAHundred);

console.log(answer);

