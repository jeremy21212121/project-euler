function getFactors(number) {
 var factors = [];
 var counter = 0;
 while(number%2===0) {
  counter++;
  number = number/2;
  if (factors.indexOf(number)=== -1 && number !== 1) {
   factors.push(Math.pow(2,counter),number)}
  }
  for (i=3; i<=Math.sqrt(number); i+=2) {
   if (number%i===0) {
    factors.push(i,number/i)
    }
  }
 return factors;
}


var getAnswerFactors = (array) => {
 var newArr = array.map((el)=>{
  var f = getFactors(el);
  if (f.length === 0) { return el; }
  //if number is prime, dont change it

  else if (f.length===2 && (f[0] === f[1] || f[1]%f[0] === 0)) { return f[0]; }
  //determine if el is a square, or a cube. If it is, include the number it is a square or cube of (ie. 4 is a square of 2, so it gets replaced by 2)
  // my previous incorrect solution just dropped non-prime numbers. It got the correct answer, but by fluke.
  //NB. I'm cheating here, so this algorithm wouldnt work for arbitrarily large series of numbers (ie. n=100) without recursively factoring the
  //factors until they are all prime

  else if (f.length===4 && f[0]*f[3] === f[1]) { return f[0]; }
  // determine if el is a power of 4 (ie. 2^4=16) to avoid recursive factoring. This means this alg will only work if n < 32 because that is 2^5.
  //if i implemented recursive factoring, this could handle abitrarily large values of n, at a cost of exponentially increasing processing time.

  else {return 1;}
  // if its not prime, or a square, cube, or power of 4, we drop it by making it a 1. We will be multiplying all the numbers in this array together
  // so making it a 1 produces the same result as dropping that element entirely.
 })
return newArr; 
}


var n = 10;

var oneToN = Array.from(Array(n).keys()).map((el)=>el+1);
//creates an array from 1 to n

var answer = getAnswerFactors(oneToN).reduce((a,b)=>a*b);
console.log(answer);
