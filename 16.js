// this is a hack, because javascript doesn't support 300+ digit integers. So, instead, I use bash and bc (An arbitrary precision calculator language) to calculate the number, then i pass it to node as arguments. Accordingly, this script must be invoked like so: node 16.js $(echo "2^1000" | bc)

var string = "";
for (var i = 2; i<7; i++) { string += process.argv[i].replace("\\","");}
const ans = string.split("").map(x=>parseInt(x)).reduce((a,b)=>a+b);
console.log(ans);
