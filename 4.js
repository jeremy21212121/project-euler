"use strict";
function reverse(s){
  return s.split("").reverse().join("");
}

function isPalendrome(number) {
  const string = number.toString();
  const len = string.length;
  const half1 = string.substring(0,len/2);
  const half2 = reverse(string.substring(len/2,len));
  if (half1===half2) { return true; } else { return false; }

}

const palendromeLength = 6;
const addZ = (palendromeLength - 4)/2;
var n = "91";
var m = "99";
var zeroes = addZ;
while (zeroes > 0) {
  n+="0";
  m+="0";
  zeroes--
}
n = parseInt(n);
m = parseInt(m);
const limit = 100*Math.pow(10,addZ);
var p = [];
for (var i = n, j = m; i < limit; i++) {
  while (j < limit) {
    let k = i*j;
    if (isPalendrome(k)) {
      p.push([i,j,k])
    }
    j++
  }
  j=m
}
p[p.length-1].forEach(function(el){console.log(el)})
