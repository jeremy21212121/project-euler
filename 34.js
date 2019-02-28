'use strict';

const factorial = (n) => {
	if (n===0) return 1;
	let prod=1;
	for (let i=n;i>0;i=i-1){
	   prod = prod*i;
    }
	return prod;
}

const factorialDict = [];
//lookup table for the values of [0-9]!
// ~2x faster than re-calculating the factorials of 0-9 over and over again
for (let i=0;i<10;i++) {
	factorialDict[i] = factorial(i);
}

//sums the factorials of the digits in a number
const factorialSum = (n) => {
	let nArr = n.toString().split("").map(x=>parseInt(x));//splits number into array of digits
	let l = nArr.length;
	let sum = 0;
	for (let i=0;i<l;i++) {
		sum += factorialDict[nArr[i]];
	}
	return sum;
}

const eqSumFactorial = (n) => {
// returns true if n === the sum of the factorials of its digits
	if (n === factorialSum(n)) {
		return true;
		 } else {
		return false;
		}
	}

let sum=0;

// trial and error to get 50000 upper limit
for (let i=3;i<50000;i++) {
 if (eqSumFactorial(i)) {
  sum += i;
  }
 }

console.log(sum);
