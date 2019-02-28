

const fifthPowerSum = (n) => {
	let nArr = n.toString().split("").map(x=>parseInt(x));// splits a number into its digits
	let l = nArr.length; //number of digits in number
	let sum = 0;
	for (let i=0;i<l;i++) {
		sum += Math.pow(nArr[i],5);//sums digits to 5th power
	}
	return sum;
}

const eqSumFifthPower = (n) => {
//checks if the sum of the 5th power of the digits === origial number
	if (n === fifthPowerSum(n)) {
		return true;
		 } else {
		return false;
	}
}
	
let sum = 0;

// i picked 500000 through trial and error, as I dont know how to calculate where these stop occuring
for (let i=3;i<500000;i++) {
 if (eqSumFifthPower(i)) sum += i;
}

console.log(sum);
