/*
Q4. Sort List
Problem Description
Sort a linked list, A in O(n log n) time using constant space complexity.



Problem Constraints
0 <= |A| = 105



Input Format
The first and the only arugment of input contains a pointer to the head of the linked list, A.



Output Format
Return a pointer to the head of the sorted linked list.



Example Input
Input 1:

A = [3, 4, 2, 8]
Input 2:

A = [1]


Example Output
Output 1:

[2, 3, 4, 8]
Output 2:

[1]


Example Explanation
Explanation 1:

 The sorted form of [3, 4, 2, 8] is [2, 3, 4, 8].
Explanation 2:

 The sorted form of [1] is [1].
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
/*
Solution Approach
We can try to implement either merge sort or qsort.

Let us look at the merge sort. We start traversing the singly linked list to find the midpoint of the singly linked list.
Now, we will sort the first half and second half separately by calling the merge sort function on them.
Then we only have to merge the 2 lists ( Note that we already have solved a problem to merge 2 lists ).
*/

function mergeSort(head) {
  if(head === null || head.next === null) {
    return head;
  }
  const midPoint = getFirstMidPoint(head);
  let h2 = midPoint.next;
  midPoint.next = null;
  head = mergeSort(head);
  h2 = mergeSort(h2);
  return mergeTwoLists(head, h2)
}

function getFirstMidPoint(head){
    let slow = head;
    let fast = head;

    while(fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
	}
  
function mergeTwoLists(h1, h2){
  let head = null, temp = null;
  if(h1.data > h2.data) {
      head = h2;
      h2 = h2.next;
  } else {
      head = h1;
      h1 = h1.next;
  }
  temp = head; 

  while(h1 != null && h2 != null) {
      if(h1.data > h2.data) {
          temp.next = h2;
          h2 = h2.next;
      } else {
          temp.next = h1;
          h1 = h1.next;
      }
      temp = temp.next;
  }
  if(h1 === null) {
      temp.next = h2
  } else {
      temp.next = h1
  }
  return head;
}
function printAll(head) {
  let temp = head;

  while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }
}

// Full linkedlist
let head = new Node(20);
let second = new Node(10);
head.next = second;
let third = (second.next = new Node(40));
second.next = third;
let fourth = new Node(30);
third.next = fourth;

console.log(head);
printAll(head);

head = mergeSort(head);
printAll(head);
