'use strict';
// const nthTriangle = (n) => {
// let arr = [];
// for (let i=1;i<n+1;i++) {
//  arr.push(i)
// }
// return arr.reduce((a,b)=>a+b);
//}
//brute force and too slow, rewritten below

const getTriangle = (n) => n*(((n-1)*0.5)+1);
// I figured out this formula by studying the first 10 triangle numbers. I noticed the ratio of n / triangle(n) going up by 0.5, so I worked this out on paper. It is many times faster than brute force, especially for large values of n

// const getFactorsSlowly = (n) => {
// const arr = [];
// for (let i=1;i<=n;i++) {
// if (n%i===0) arr.push(i);
// }
// return arr;
//}
// brute force and slow as hell

const getFactorsMed = (n) => {
 const arr = [];
 for (let i=1;i<=Math.sqrt(n);i++) {
  if (n%i===0) {
   if (n/i!==i) {    
    arr.push(i,n/i)
   } else { 
    arr.push(i);
    break;
   }
  }
 }
 return arr;
}
// i optimized this to be faster than brute force. Should be about Math.sqrt(brute force)

for (let i=7;i<100000;i++){
 if (getFactorsMed(getTriangle(i)).length >= 500) {
  console.log(`the nth (${i}) triangle number (${getTriangle(i)}) has ${getFactorsMed(getTriangle(i)).length} factors`);
  break;
 }
}

