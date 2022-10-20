let arr = [1, 2, 3, 4, 5];

// for (let start = 0; start < arr.length; start++) {
//   for (let end = start; end < arr.length; end++) {
//     for (let i = start; i <= end; i++) {
//       console.log(arr[i]);
//     }
//   }
//   console.log(' End subarray');
// }

let totalArrays = [];
for (let start = 0; start < arr.length; start++) {
  for (let end = start; end < arr.length; end++) {
    let subArray = [];
    for (let i = start; i <= end; i++) {
      subArray.push(arr[i]);
    }
    totalArrays.push(subArray);
  }
}
console.log(totalArrays);
