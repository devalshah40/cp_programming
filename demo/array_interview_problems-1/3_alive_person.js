/*
Problem Description
There are A people standing in a circle. Person 1 kills their immediate clockwise neighbour and pass the knife to the next person standing in circle. This process continues till there is only 1 person remaining. Find the last person standing in the circle.


Problem Constraints
1 <= A <= 105


Input Format
First argument A is an integer.


Output Format
Return an integer.


Example Input
Input 1:
A = 4
Input 2:
A = 5


Example Output
Output 1:
1
Output 2:
3


Example Explanation
For Input 1:
Firstly, the person at position 2 is killed, then the person at position 4 is killed,
then the person at position 3 is killed. So the person at position 1 survives. 
For Input 2:
 
Firstly, the person at position 2 is killed, then the person at position 4 is killed, 
then the person at position 1 is killed. Finally, the person at position 5 is killed. 
So the person at position 3 survives. 

*/

let n = 8;
let power2StepsLessthanN = 1;

while (power2StepsLessthanN <= n) {
  power2StepsLessthanN *= 2;
}
power2StepsLessthanN /= 2;
let noOfKills = n - power2StepsLessthanN;
let winner = 1 + 2 * noOfKills;
console.log(winner);
/*
public class Solution {
    public int msbPos(int n){
        int pos = 0;
        while (n != 0) {
            pos++;
            n = n / 2;
        }
        return pos;
    }
    public int solve(int A) {
        int position = msbPos(A);
        int j = (int)Math.pow(2, (position - 1));
        A = A - j;
        A = A * 2;
        A = A + 1;
        return A;
    }
}
*/
