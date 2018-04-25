// the most compact I could make it
a=0;
b=1;
s=0;
while(a+b<4e+6){
  t=a+b;
  if(t%2==0){
    s+=t
  }
  a=b;
  b=t
}
console.log(s)
