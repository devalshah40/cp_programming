/*
Q2. Middle element of linked list
Problem Description
Given a linked list of integers, find and return the middle element of the linked list.

NOTE: If there are N nodes in the linked list and N is even then return the (N/2 + 1)th element.



Problem Constraints
1 <= length of the linked list <= 100000

1 <= Node value <= 109



Input Format
The only argument given head pointer of linked list.



Output Format
Return the middle element of the linked list.



Example Input
Input 1:

 1 -> 2 -> 3 -> 4 -> 5
Input 2:

 1 -> 5 -> 6 -> 2 -> 3 -> 4


Example Output
Output 1:

 3
Output 2:

 2


Example Explanation
Explanation 1:

 The middle element is 3.
Explanation 2:

 The middle element in even length linked list of length N is ((N/2) + 1)th element which is 2.
*/
// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

/*
Solution Approach
One way is to traverse the whole linked list and calculate the length and then traverse half the length to find the middle element.

We can do it in one traversal by maintaining a slow and fast pointer.

The fast pointer moves twice as the slow pointer does. When the fast pointer is at the end of the linked list, the slow pointer will point to the middle element.

Return the element at which the slow pointer points.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
	function getMidPoint(head){
    let slow = head;
    let fast = head;

    while(fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.data;
	}
	function getFirstMidPoint(head){
    let slow = head;
    let fast = head;

    while(fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.data;
	}
function printAll(head) {
  let temp = head;

  while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }
}

// Full linkedlist
let head = new Node(10);
let second = new Node(20);
head.next = second;
let third = (second.next = new Node(30));
second.next = third;
let fourth = new Node(40);
third.next = fourth;

console.log(head);
printAll(head);

let midValue = getMidPoint(head);
console.log(midValue);

midValue = getFirstMidPoint(head);
console.log(midValue);

let fifth = new Node(50);
fourth.next = fifth;

midValue = getMidPoint(head);
console.log(midValue);

midValue = getFirstMidPoint(head);
console.log(midValue);
