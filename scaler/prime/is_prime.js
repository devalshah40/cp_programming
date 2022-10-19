let number = 4;
function isPrime(number) {
  number = Number(number);

  let factorsCount = 0;
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      // console.log(i);
      // console.log('\n');
      // console.log(number / i);
      // console.log('\n');
      // corner case for 100, 1 where 10*10 should be 1 factor and for 1 there should be only 1 factor.
      if (i * i === number) {
        factorsCount++;
      } else {
        factorsCount += 2;
      }
      if (factorsCount > 2) {
        break;
      }
    }
  }
  if (factorsCount === 2) {
    return 1;
  } else {
    return 0;
  }
}
// console.log(isPrime(BigInt(number)));

/*
You will be given an integer n. 
You need to return the count of prime numbers less than or equal to n.
Example Input
Input 1: 19
Input 2: 1


Example Output
Output 1: 8
Output 2: 0


Example Explanation
Explanation 1: Primes <= 19 are 2, 3, 5, 7, 11, 13, 17, 19
Explanation 2: There are no primes <= 1 
*/
let countPrimes = 0;
for (let i = 1; i <= 19; i++) {
  let isPrimeExist = isPrime(i);
  if (isPrimeExist) {
    console.log('i = ', i);
    console.log('\n');
    countPrimes++;
  }
  // return countPrimes;
}

console.log(countPrimes);
