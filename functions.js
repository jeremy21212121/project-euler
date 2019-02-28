const getProperDivisors = (n) => {
//returns an array of all factors including 1
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


const factorial = (n) => {
	if (n===0) return 1;
	let prod=1;
	for (let i=n;i>0;i=i-1){
	   prod = prod*i;
    }
	return prod;
}

const bigIntFactorial = (n) => {
 let prod = 1n;
 for (let i=n; i>0; i-=1) {
  prod *= BigInt(i)
 }
 return prod
}


const choose = (n,k) => factorial(n) / ( factorial(k) * factorial(n-k) );
//eg. 52 choose 5 (number of 5 card hands in a deck of cards) === choose(52,5); Use Math.round() due to floating point weirdness

const bigIntChoose = (n,k) => bigIntFactorial(n) / ( bigIntFactorial(k) * bigIntFactorial(n-k) );

const bigIntFactorial = (n) => {
 let prod = 1n;
 for (let i=n; i>0; i-=1) {
  prod *= BigInt(i)
 }
 return prod
}

// factorial function using BigNum library. Not needed anymore thx to native BigInt
const BigNumber = require('bignumber.js');
const BNfactorial = (n) => {
 let prod = new BigNumber(1);
 for (let i=n;i>0;i=i-1) {
  prod = prod.times(i);
 }
 return prod;
}
//



const isPrime = (n) => {
 if (n===1) return false;
 
 for (let i=2;i<=Math.sqrt(n);i++) {
  if (n%i===0) {
   return false;
   
  }
 }
return true;
}

const gcd = (a,b) => {
 // returns greatest common denominator of a and b
 if (a===0) return b;
 if (b===0) return a;
 if (a===1||b===1) return 1;
 if (a===b) return a;
 //must be gt 1 and !==
 let great = 0; let less = 0; let mod = 0;
 if (a>b) {great = a;less=b;}
 else {great = b; less = a;}
 mod = great % less;
 return gcd(less,mod);
}

const greatestCommonDenominator = (a, b) => {
  //gcd for bignums ft tail call recursion
  if (a === 0n) {
    return b;
  }
  if (b === 0n) {
    return a;
  }
  if (a === 1n || b === 1n) {
    return 1n;
  }
  if (a === b) {
    return a;
  }
  let greater = (a>b) ? a : b;
  let lesser = (a>b) ? b : a;
  let mod = greater  % lesser;
  
  return greatestCommonDenominator(lesser, mod);
};
