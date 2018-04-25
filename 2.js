//this can be pasted into the browser console to fill in the answer automagically if
// you are on projecteuler.net/problem=2
//otherwise it will console log out the answer (works in node) :)
//
//the problem is to find the sum of the even values of a fibonacci sequence whose largest value does not exceed 4 million

const max = 4000000;
const fib = [1,2];

function makeFib(arr,max) {
  while (arr[arr.length-1]+arr[arr.length-2] <= max) {
   arr.push(arr[arr.length-1] + arr[arr.length-2])
  }
}

function sumOfEvenValuesArray(arr) {
  var sum = 0;
  for (i=0;i<arr.length;i++) {
    if (arr[i]%2===0) {
      sum += arr[i]
    }
  }
  return sum;
}

makeFib(fib,max);

var answer = sumOfEvenValuesArray(fib);
console.log(answer);

/////////////////////////////////////////////

var isBrowser = new Function(
  "try {return this===window;}catch(e){ return false;}"
);

if (isBrowser() && window.location.href === "https://projecteuler.net/problem=2") {
  const guess = document.getElementById("guess");
  guess.value = answer;
  const cap = document.getElementById("captcha");
  cap.oninput = function(){
    if (cap.value.length === 5){
	     document.form.submit()
     }
   }
}
