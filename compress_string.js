let str = 'aaaabbbccd';

let len = str.length;

for (let i = 0; i < len; i++) {
  let count = 1;

  while (i < len && str[i] === str[i + 1]) {
    count++;
    i++;
  }
  console.log('i =', i);
  console.log('str =', str[i] + count);
}

// let output = '';
// let i = 0,
//   tempCount = 1;
// while (i < len) {
//   if (str[i] === str[i + 1]) {
//     tempCount++;
//   } else if (str[i] !== str[i + 1]) {
//     output += str[i] + tempCount;
//     tempCount = 1;
//   }
//   i++;
// }

// console.log(output);
// console.log(i);
