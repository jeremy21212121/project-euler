'use strict';
function getLargestPrimeFactor(inputNumber){
	// Any number that is divisible by the input number will share the
	// it's own factors with the input number, if 15 is divisible by
	// 3 then 30 will be too
	let divisor = 2,

	// Store the largest divisor we find
	largestPrimeFactor = 2;

	while(inputNumber > 1){
		if(inputNumber%divisor===0){

			// Update the input number to be the quotient of itself and
			// the smallest divisor greater than 1. This will produce the
			// largest divisor possible that will share the same prime
			// factors as the input number
			inputNumber = inputNumber/divisor;

			// If this is the largest divisor we've found so far, update
			// the largestPrimeFactor variable
			if(divisor > largestPrimeFactor) largestPrimeFactor=divisor;

			// Reset our divisor and continue working on the newly
			// calculated inputNumber
			divisor = 2;
		}

		// If the input number isn't divisible the divisor, increment
		// and try again
		else divisor++;
	}

	return largestPrimeFactor;
}

// Output the largest prime factor of 600851475143
console.log("Largest prime is: "+getLargestPrimeFactor(600851475143));
