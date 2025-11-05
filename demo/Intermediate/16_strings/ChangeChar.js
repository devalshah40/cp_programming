/*
Problem Description
You are given a string A of size N consisting of lowercase alphabets.

You can change at most B characters in the given string to any other lowercase alphabet such that the number of distinct characters in the string is minimized.

Find the minimum number of distinct characters in the resulting string.



Problem Constraints
1 <= N <= 100000

0 <= B < N



Input Format
The first argument is a string A.

The second argument is an integer B.



Output Format
Return an integer denoting the minimum number of distinct characters in the string.



Example Input
A = "abcabbccd"
B = 3



Example Output
2



Example Explanation
We can change both 'a' and one 'd' into 'b'.So the new string becomes "bbcbbbccb".
So the minimum number of distinct character will be 2.
*/

function changeToUniqueChar(str, n) {
  let frequencyArr = new Array(26).fill(0);
  let totalUniqChars = 0;
  for (const char of str) {
    let index = char.charCodeAt() - 'a'.charCodeAt();
    frequencyArr[index]++;
    if (frequencyArr[index] === 1) {
      totalUniqChars++;
    }
  }
  // if remove 0 elements then unique characters are answer
  if (n === 0) {
    return totalUniqChars;
  }
  if (totalUniqChars === 1) {
    return totalUniqChars;
  }
  frequencyArr.sort((a, b) => a - b);
  // console.log(totalUniqChars);
  // console.log(frequencyArr);
  for (let i = 0; i < frequencyArr.length; i++) {
    if (frequencyArr[i] === 0) continue;
    n = n - frequencyArr[i];
    if (n === 0) {
      totalUniqChars--;
      // if remaining count is 0 then no need to remove any char so we will break.
      break;
    } else if (n > 0) {
      totalUniqChars--;
    } else if (n < 0) {
      // if remaining count is 1 and frequency of current char is 3 then we can't use this char's frequency so answer is negative so we will break.
      break;
    }
  }
  return totalUniqChars;
}

// let str = 'aabbbcccd';
// let n = 3;
// let str = 'a';
// let n = 1;
let str =
  'zjeeuhmsrqcozijipfioneeddpszrnavymmtatbdzqsoemuvnpppsuacbazuxmhecthlegrpunkdmbppweqtgjoparmowzdqyoxytjbbhawdydcprjbxphoohpkwqyuhrqzhnbnfuvqnqqlrzjpxiogvliexdzuzosrkrusvojbrzmwzpowkjilefraamdigpnpuuhgxpqnjwjmwaxxmnsnhhlqqrzudltfzotcjtnzxuglsdsmzcnockvfajfrmxothowkbjzwucwljfrimpmyhchzriwkbarxbgfcbceyhjugixwtbvtrehbbcpxifbxvfbcgkcfqckcotzgkubmjrmbsztsshfroefwsjrxjhguzyupzwweiqurpixiqflduuveoowqcudhnefnjhaimuczfskuiduburiswtbrecuykabfcvkdzeztoidukuhj';
let n = 19;
let totalUniqChars = changeToUniqueChar(str, n);
console.log(totalUniqChars);
