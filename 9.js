// find the product of the pythagorean triplet whose sum is 1000

'use strict';

const genC = (a,b) => Math.sqrt(a*a+b*b);
//calculates value of C based of A and B. if a^2 + b^2 = c^2, then √(a^2+b^2) = c

const aMin = 200,
aMax=300,
bMin=300,
bMax=400;
//made a guess about the ranges of A and B values. Dumb luck that i guessed the value of A.

for (let i=aMin;i<aMax;i++) {
 for (let j=bMin;j<bMax;j++) {
  let c = genC(i,j);
  if ( c%1 === 0 && i+j+c===1000) {
  // if c is a whole number and a+b+c=1000, we have found the answer
   console.log( (i*j*c).toString() );
  }
 }
}


