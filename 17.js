// how many letters in all the numbers one to one thousand? Don't include hyphens or spaces, but do include the word "and", like "one hundred and eleven".

'use strict';

let counter=0;

const dict = {0:"",1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen",14:"fourteen",15:"fifteen",16:"sixteen",17:"seventeen",18:"eighteen",19:"nineteen",20:"twenty",30:"thirty",40:"forty",50:"fifty",60:"sixty",70:"seventy",80:"eighty",90:"ninety",100:"hundred",1000:"thousand"};

const getUnderXXI = (n) => dict[n];

const getUnderC = (n) => {
 let a = n.toString().substring(0,1).concat("0");
 let b = n.toString().substring(1,2);
 return dict[a]+dict[b];
}

const getUnderM = (n) => {
 let s = n.toString();
 let a = dict[s.substring(0,1)] + dict[100];
 let b = writeNumber(parseInt(s.substring(1,3)));
 if (b==="") return a;
 else return a + "and" + b;
}

const writeNumber = (n) => {
 if (n<1 || n%1 !== 0) return "";
 else if (n<21) return getUnderXXI(n);
 else if (n<100) return getUnderC(n);
 else if (n<1000) return getUnderM(n);
 else if (n===1000) return dict[1]+dict[n];
}

for (let i=1;i<1001;i++) counter += writeNumber(i).length;

console.log(counter);
