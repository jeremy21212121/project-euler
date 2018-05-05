'use strict';

const itSeq = (n) => {
 let x = n;
 const arr = [x];
 while (x>1) {
  if (x%2===0) { x=x/2; } else {x=(3*x)+1;}
  arr.push(x);
 }
return arr;
}

const highest = (() => {
 let longestChain = 2;
 let value= 2;
 for (let i=3;i<1000000;i++) {
  let x = itSeq(i);
  if (x.length>longestChain) {longestChain=x.length;value=i;}
 }
 return value;
})();

console.log(highest);
