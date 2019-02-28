// after a combinatorics refresher, i re-wrote this
'use strict';

const n = 20;

const factorial = (n) => Array.from(Array(n).keys()).map(x=>x+1).reduce((a,b)=>a*b);

const choose = (x,y) => factorial(x) / ( factorial(y)* factorial(x-y) );
// x choose y

const answer = choose(2*n,n);

console.log(answer);
