let number = 100;

let factorsCount = 0;
for (let i = 1; i <= Math.sqrt(number); i++) {
  if (number % i === 0) {
    // console.log(i);
    // console.log('\n');
    // console.log(number / i);
    // console.log('\n');
    //corner case for 100, 1 where 10*10 should be 1 factor and for 1 there should be only 1 factor.
    if (i * i === number) {
      factorsCount++;
    } else {
      factorsCount += 2;
    }
  }
}
console.log(factorsCount);
