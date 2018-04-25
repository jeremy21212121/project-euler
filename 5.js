//Question:
//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
//
//I had a feeling that 2520 had something to do with the product of the prime numbers under 10 (210). Dividing 2520/210 gives us the magic
//value of 12. The magic value needs to be multiplied by (bigger number/10). In this case, it is 10/10 = 1, but for the primes under 20 
//it will be 20/10 = 2. creating a magic multiplier of 12*2 = 24. 
//The answer is the product of the primes under 20 multiplied by 24. 

const n = 20;
//largest divisor

const magicMultiplier = n/10*12;

const primesUnderTwenty = [1,2,3,5,7,11,13,17,19];

const product = primesUnderTwenty.reduce((a,b)=>a*b);

const answer = product * magicMultiplier;

console.log(answer);
