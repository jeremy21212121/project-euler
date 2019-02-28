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

const sum = (arr) => arr.reduce((a,b)=>a+b);

const isAbundant = (n) => sum(getProperDivisors(n)) > n;

const abundentNums = [];
// abundant numbers under 28124
for ( let i=12;i<28124;i++ ) {
 if ( isAbundant(i) ) abundentNums.push(i);
}

const abundantSums = [];
// calculates all possible sums of two abundant numbers under 28124. Nested loops means over 40 million iterations :( very slow EDIT: Line 36 results in ~4x speed up, still slow though
for ( let i=0;i<abundentNums.length;i++ ) {
 for ( let j=0;j<abundentNums.length;j++ ) {
 // let a = abundentNums[i];
 // let b = abundentNums[j];
  let c = abundentNums[i] + abundentNums[j];
  if ( c > 28123 ) break; // abundentNums are in ascending order, so break inner loop once the sum > 28123
  if ( !abundantSums.includes(c) ) abundantSums.push(c); // push it to the array, if it is not already in there
 }
}


const nonAbunSums = [];
// checks each number between 1 and 28123 to see if it is in the array of abundantSums. If not, it must be a nonAbundantSum.
for (let i=1;i<28124;i++) {
 if ( !abundantSums.includes(i) ) nonAbunSums.push(i);
}

const answer = nonAbunSums.reduce((a,b)=>a+b);

console.log(answer);
