let arr = [1, 2, 3, 4, 5];

for (let start = 0; start < arr.length; start++) {
  let sum = 0;
  for (let end = start; end < arr.length; end++) {
    sum += arr[end];
  }
  console.log(sum);
}
