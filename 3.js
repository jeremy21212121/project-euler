// Project Euler question 3 - Largest prime factor of 600851475143.
// I was going for slightly more elegant than brute force. The longest loop is √600851475143 / 2 = 387573 iterations. I'm pretty happy with that, given my (low) level of math.
//
// If the number was even, I'd have to divide by two until it wasn't anymore, which would add a couple of lines.

var f = [];
var n = 600851475143;

function getFactorsOdd(number,factors) {
	for (i=3;i<=Math.sqrt(number);i+=2) {
		if (number%i===0) {
			factors.push(i,number/i)
      //if you find one factor, you've likely acually found two!
    }
	}
}

function getFactors(number) {
	var factors = [];
	var counter = 0;
	while(number%2===0){counter++;number = number/2;if (f.indexOf(number)=== -1 && number !== 1) {factors.push(Math.pow(2,counter),number)}}
	for (i=3;i<=Math.sqrt(number);i+=2) {
		if (number%i===0) {
			factors.push(i,number/i)

    }
  }
	return factors;
}

getFactorsOdd(n,f);

var subfactor=[];
//factoring the factors to see whats prime
f.forEach(function(el,i){
	subfactor[i] = [];
	getFactorsOdd(el,subfactor[i])
})

var primefactors = [];
//if it has no factors (other than itself and 1, which we ignore), its a prime factor
subfactor.forEach(function(el,i){
	if (el.length===0) {
		primefactors.push(f[i])}
})

var largest = 0;
//i could have just used the last one, as they were already sorted ascending. This seemed safer, took barely any code and will help me sleep better at night
primefactors.forEach(function(el){
	if (el>largest) {
		largest = el;
	}
})
console.log(largest);
