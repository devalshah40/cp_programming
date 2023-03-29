/*
Problem Description
A linked list A is given such that each node contains an additional random pointer which could point to any node in the list or NULL.

Return a deep copy of the list.



Problem Constraints
0 <= |A| <= 106



Input Format
The first argument of input contains a pointer to the head of linked list A.



Output Format
Return a pointer to the head of the required linked list.



Example Input
Given list
   1 -> 2 -> 3
with random pointers going from
  1 -> 3
  2 -> 1
  3 -> 1
  


Example Output
   1 -> 2 -> 3
with random pointers going from
  1 -> 3
  2 -> 1
  3 -> 1
  


Example Explanation
You should return a deep copy of the list. The returned answer should not contain the same node as the original list, but a copy of them. The pointers in the returned list should not link to any node in the original input list.

*/
class RandomListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.random = null;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// copy list with  new node values
//return the head node in the linked list
function copyList(head) {
  let h1 = head;
  let temp = null;
  let h2 = new Node();
  let newTail = h2;
  while (h1) {
    temp = h1;
    h1 = h1.next;
    newTail.next = new Node(temp.data);
    newTail = newTail.next;
  }
  return h2.next;
}

function printAll(head) {
  let temp = head;

  while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }
}

// Full linkedlist
let head = new RandomListNode(10);
let second = new RandomListNode(20);
head.next = second;
let third = (second.next = new RandomListNode(30));
second.next = third;
let fourth = new RandomListNode(40);
third.next = fourth;

console.log(head);
printAll(head);

let newHead = copyList(head);
printAll(newHead);
