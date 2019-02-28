let sundays = 0;

for (let year=1901;year<=2000;year++) {
 for (let month=1;month<=12;month++) {
  const d = new Date(`${month} 1 ${year}`);
  if (d.getDay() === 0) sundays += 1; 
 }
}
console.log(sundays);
