let number = 49;

let squareRoot = -1;
for (let i = 1; i <= number; i++) {
  if (i * i === number) {
    squareRoot = i;
    break;
  }
}
console.log(squareRoot);
