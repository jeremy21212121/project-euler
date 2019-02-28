'use strict';

const getFactors = (n) => {
 const arr = [];
 for (let i=1;i<=Math.sqrt(n);i++) {
  if (n%i===0) {
   if (n/i!==i && i!==1) {    
    arr.push(i,n/i)
   } else { 
    arr.push(i);
    
   }
  }
 }
 return arr;
}

const sum = (arr) => arr.reduce((a,b)=>a+b);

const arr = [];

for (let i=220;i<10000;i++){
 let m = sum( getFactors(i) );
 let n = sum( getFactors(m) );
 if (n===i && i!==m) {
  arr.push(i,m);
  i=m;
 }
}

console.log( sum(arr) );
