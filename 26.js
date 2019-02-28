'use strict';

const BigNumber = require('bignumber.js');

const getFactors = (n) => {
//returns an array of all factors excluding 1
 const arr = [];
 for (let i=2;i<=Math.sqrt(n);i++) {
  if (n%i===0) {
   if (n/i!==i) {    
    arr.push(i,n/i)
   } else { 
    arr.push(i); 
   }
  }
 }
 return arr;
}

const bnuf = (n) => {
 // returns a unit fractions with denominator n and n decimal places in string form
 BigNumber.config({DECIMAL_PLACES: n});
 return BigNumber("1").div(BigNumber(n)).toString();
 }

const primesUnderOneThousand = [];
// excluding 2 because even denominator fractions all terminate
for (let i=3;i<=1000;i++){
 if (getFactors(i).length===0) primesUnderOneThousand.push(i);
}



for (let i=primesUnderOneThousand.length-1; i>0; i-=1){
 const ns = bnuf(primesUnderOneThousand[i]).replace("0.","");
 const re = new RegExp(ns.substring(0,20),"g");
 if ( ns.match(re).length === 1 ) {
  console.log(primesUnderOneThousand[i]);
  break;
 }
}

// logs 983, which is the largest full reptend prime under 1000. 
