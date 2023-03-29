/*
Q1. Reverse Linked List
Problem Description
You are given a singly linked list having head node A. You have to reverse k elements in the linked list and return the head node of that reversed list.

NOTE: You have to do it in-place and in one-pass.



Problem Constraints
1 <= Length of linked list <= 105

Value of each node is within the range of a 32-bit integer.



Input Format
First and only argument is a linked-list node A.



Output Format
Return a linked-list node denoting the head of the reversed linked list.



Example Input
Input 1:

 A = 1 -> 2 -> 3 -> 4 -> 5 -> NULL 
 B = 3


Example Output
Output 1:

 3 -> 2 -> 1 -> 4 -> 5 -> NULL 


Example Explanation
Explanation 1:

 The linked list has 5 nodes. After reversing first 3 nodes them, the list becomes : 3 -> 2 -> 1 -> 4 -> 5 -> NULL  
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
//return the head node in the linked list
function reverseKElementsList(head, K) {
  if (K <= 1 || !head) {
    return head;
  }
  let h2 = null,
    h1 = head,
    temp = null,
    len = 0;
  while (h1 && len < K) {
    temp = h1;
    h1 = h1.next;
    temp.next = h2;
    h2 = temp;
    len++;
  }
  head.next = h1;
  return h2;
}

function printAll(head) {
  let temp = head;

  while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }
}
let head = new Node(10);
let second = new Node(20);
head.next = second;
let third = (second.next = new Node(30));
second.next = third;
let fourth = new Node(40);
third.next = fourth;

// console.log(head);
// printAll(head);

// head = reverseKElementsList(head, 2);
// printAll(head);

head = reverseKElementsList(head, 1);
printAll(head);
