'use strict';

//const ulamSpiral = (n,b,c=1) => n*(4*n+b)+c;// factored polynomial 4n^2+bn+c, see ulam spiral on wikipedia

let sum = 1;

[0,1].forEach(v => { // this sums the NW and NE directions and doubles them, as it is a shortcut
 for (let n = 1; n <= 500; n++) {
  //sum += ulamSpiral(n,v*2)*2;
  sum += (n*(4*n+v*2)+1)*2;
 }
})

console.log(sum);
