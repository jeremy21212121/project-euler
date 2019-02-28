'use strict';

const BigNumber = require('bignumber.js');

let a = BigNumber(1);

let b = BigNumber(1);

let c = BigNumber(2);

let pos = 3; // position of "c" in the fibonacci sequence

while (c.e < 999) { // while the exponent is less than 999
 a=b;
 b=c;
 c = a.plus(b);
 pos++;

}

console.log(pos);
