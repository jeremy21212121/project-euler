let str = ``;

let counter = 1;

while (str.length < 1000001) {
 str += counter.toString();
 counter += 1;
}

const arr = [];

let a = 0;
let b = 1;

while (a<1000000) {
 arr.push(parseInt(str.substring(a,b)));
 a = a*10+9;
 b = b*10;
}

console.log(arr.reduce((a,b)=>a*b));
