'use strict';

//    let n=20;
//    // n x n grid
//
//
//    let counter = 0;
//
//    for (let i=1;i<(Math.pow(2,2*n)-1); i++) {
//     if ( (i.toString(2).match(/1/g) || []).length === n ) {
//      counter++;
//     }
//
//    }
//
//    console.log(counter);
//}
// above is a weird brute force sort of solution that is way too slow. Basically, we treat down as 0 and right as 1. Then we check the binary representation of every number from 1 to 2^(n*2) === 2^40 === over 1 trillion! Those binary numbers that have n 1's in them (in this case, n=20 so twenty 1's) are valid paths. While this does work, it gets exponentially slower as the values of n increase. By my napkin math, it would have taken 100 to 1000 days to compute on my laptop. So I had to learn something about the mathematics of this problem. Wikipedia to the rescue!!

// I read about lattice paths, which lead me to North-East lattice paths, which is essentially the problem! I couldn't grok the maths right away, but i found the page for pascals triangle. My spidey sense started tingling. I noticed that the number of (NE lattice path) solutions were running down the middle of the triangle on every second row! jackpot!

// pascals triangle is relatively simple to make, so i was able to write an algorithm to construct one in a matter of minutes.




const tar = 20;
// size grid we need the number of solutions for

const pt = [];

for (let i=0;i<=(tar*2);i++) {pt.push([]);}
//build the array for holding pascals triangle.

pt[0][0]=1;
// first value in pascals triangle



for (let n=1; n<=(tar*2);n++) {
 for (let k=0;k<=n;k++) {
  pt[n][k] = (pt[n-1][k-1] || 0) + (pt[n-1][k] || 0)
 }
}
// This builds the triangle. In pascals triangles, the row is known as n, and the horizontal position is known as k

let answer = pt[tar*2][tar];
// by studying a small triangle, i figured out that the # of solutions for a X by X grid is located at position 2X,X. For example, given a 2x2 grid, the number of solutions can be found on row 4, column 2 (0-indexed).

console.log(answer);

