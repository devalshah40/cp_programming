/*
Q1. Reverse Linked List
Problem Description
You are given a singly linked list having head node A. You have to reverse the linked list and return the head node of that reversed list.

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
Input 2:

 A = 3 -> NULL 


Example Output
Output 1:

 5 -> 4 -> 3 -> 2 -> 1 -> NULL 
Output 2:

 3 -> NULL 


Example Explanation
Explanation 1:

 The linked list has 5 nodes. After reversing them, the list becomes : 5 -> 4 -> 3 -> 2 -> 1 -> NULL 
Expalantion 2:

 The linked list consists of only a single node. After reversing it, the list becomes : 3 -> NULL 
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
//return the head node in the linked list
function reverseList(head) {
  let h2 = null,
    h1 = head,
    temp = null;
  while (h1) {
    temp = h1;
    h1 = h1.next;
    temp.next = h2;
    h2 = temp;
  }
  return h2;
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

head = reverseList(head);
printAll(head);

// null linkedlist
head = reverseList(null);
printAll(head);

// 1 node linkedlist
let head = new Node(10);

console.log(head);
printAll(head);

head = reverseList(head);
printAll(head);
