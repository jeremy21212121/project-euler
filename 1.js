//this can be pasted into the browser console to fill in the answer automagically if
// you are on projecteuler.net/problem=1
//otherwise it will console log out the answer (works in node) :)
//
//the problem is to find the sum of the multiples of 3 or 5 that are under 1000

function sumOfArray(a) {
  return a.reduce(function(previousValue, currentValue){
    return currentValue+previousValue
  })
}

var arr = [];

for (i=1; i<1000; i++) {
 if (i%3===0 || i%5===0 && arr.indexOf(i)===-1) {
   //if its evenly divisable by 3 or 5 and it hasnt been added yet...add it
  arr.push(i)
 }
}

var answer = sumOfArray(arr);
console.log("The answer is: " + answer);

var isBrowser = new Function(
  "try {return this===window;}catch(e){ return false;}"
);

if (isBrowser() && window.location.href === "https://projecteuler.net/problem=1") {
//if run in the browser console, it will fill in and submit the answer, although you do still have to type in the captcha
  const guess = document.getElementById("guess");
  guess.value = answer;
  console.log("Filled in the answer for you, govnah!");
  const cap = document.getElementById("captcha");
  cap.oninput = function(){
    if (cap.value.length === 5){
	     document.form.submit()
     }
   }
   console.log("Fill in the captcha, and I'll auto submit the answer for ya!");

}
