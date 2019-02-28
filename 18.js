const z =
`75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`.split("\n");

const x = z.map(x=>x.split(" ").map(x=>parseInt(x)));
// we now have an array containing one array per line containing the integers from that line




for (let j=0;j<15;j++) {
let counter = x[14][j];
let prevX = j;
for (i=14;i>0;i=i-1) {
 let a = x[i][prevX] || 0;
 let b = x[i][prevX-1] || 0;
 if (b > a) { counter += b; prevX=prevX-1;}
 else {counter += a;}
}
console.log(counter.toString() + " started at " + j.toString());
}



let j=0;
let counter = x[0][j];
let prevX = j;
for (i=0;i<14;i++) {
 let a = x[i][prevX] || 0;
 let b = x[i][prevX+1] || 0;
 if (b > a) { counter += b; prevX++;}
 else {counter += a;}
}
console.log(counter.toString());
