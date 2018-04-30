// sum of the factors under 2 million. NB. this solution is very slow.
'use strict';

const getFactors = (number) => {
 const factors = [];
 let counter = 0;
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
// trusty old getFactors function, from problem 3 originally

const isPrime = (n) => { if (getFactors(n).length === 0) {return true;} else {return false;}}
// if length of factors array is 0, it is prime

const primes = [2,3,5,7];
// the first few primes are in the question

for (let i=8;i<2000000;i++) {
 if (isPrime(i)) primes.push(i);
}
// this gives us all the primes under 2 million

const answer = primes.reduce((a,b)=>a+b);
// sums our list of primes

console.log(answer);
