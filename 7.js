// what is the 10 001st prime?
'use strict';

function getFactors(number) {
 var factors = [];
 var counter = 0;
 while(number%2===0) {
  counter++;
  number = number/2;
  if (factors.indexOf(number)=== -1 && number !== 1) {
   factors.push(Math.pow(2,counter),number)}
  }
  for (var i=3; i<=Math.sqrt(number); i+=2) {
   if (number%i===0) {
    factors.push(i,number/i)
    }
  }
 return factors;
}

const firstSix = [2,3,5,7,11,13];

const buildPrimes = (arr,pos) => {
//add two to the last prime and see if it has any factors. If no factors, push it to newArr. Else add 2 and check again, until we have "pos" number of primes
 let newArr = arr;
 let n = newArr[newArr.length-1] + 2;
 while (newArr.length < pos) {
  if (getFactors(n).length === 0) {
   newArr.push(n);
  }
  n = n+2;
 }
 return newArr;
}

const primesArray = buildPrimes(firstSix, 10001);
console.log(primesArray[10000]);
