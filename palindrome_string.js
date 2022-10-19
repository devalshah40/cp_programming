let str = 'abcla';

let h = str.length - 1;
let l = 0;

let isPalindrome = true;
while (l < h) {
  if (str[l] === str[h]) {
    l++;
    h--;
  } else {
    isPalindrome = false;
    break;
  }
}

console.log(isPalindrome);
