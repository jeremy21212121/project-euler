'use strict';

const BigNumber = require('bignumber.js');

const factorial = (n) => {
 let prod = new BigNumber(1);
 for (let i=n;i>0;i=i-1) {
  prod = prod.times(i);
 }
 return prod;
}

const x = factorial(100).toString();

const nonZeroDigitString = x.substring(0,x.indexOf("e+")).replace(".","");

const answer = nonZeroDigitString.split("").map(el=>parseInt(el)).reduce((a,b)=>a+b);

console.log(answer);
