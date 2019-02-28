'use strict';

const BigNumber = require('bignumber.js');

const discretePowers = (min,max) => {
 const arr = [];
 for (let i=min;i<=max;i++) {
  for (let j=min;j<=max;j++) {
   const a = BigNumber(i).pow(j).toString();
   if (!arr.includes(a)) arr.push(a);
  }
 }
 return arr.length;
}

console.log( discretePowers(2,100) );
