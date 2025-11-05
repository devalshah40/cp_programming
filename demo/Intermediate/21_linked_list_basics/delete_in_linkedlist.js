/*
Problem Description
You are given the head of a linked list A and an integer B. Delete the B-th node from the linked list.

Note : Follow 0-based indexing for the node numbering.



Problem Constraints
1 <= size of linked list <= 105
1 <= value of nodes <= 109
0 <= B < size of linked list



Input Format
The first argument A is the head of a linked list.

The second arguement B is an integer.



Output Format
Return the head of the linked list after deletion



Example Input
Input 1:
A = 1 -> 2 -> 3
B = 1
Input 2:
A = 4 -> 3 -> 2 -> 1
B = 0


Example Output
Output 1:
1 -> 3
Output 2:
3 -> 2 -> 1


Example Explanation
For Input 1:
The linked list after deletion is 1 -> 3.
For Input 2:
The linked list after deletion is 3 -> 2 -> 1.

*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function insertLinkedList(head, B, C) {
  let newNode = new Node(B);
  // if position is 0 or -1
  if (C <= 0) {
    newNode.next = head;
    // head = newNode;
    // return head;
    return newNode;
  }

  // head is null
  if (head === null) {
    // head = newNode;
    // return head;
    return newNode;
  }

  // let temp = head;
  // let len = 0;
  // while (temp.next) {
  //   if (len + 1 === C) {
  //     break;
  //   }
  //   temp = temp.next;
  //   len++;
  // }

  let temp = head;
  let len = 0;
  while (len < C - 1 && temp.next) {
    temp = temp.next;
    len++;
  }

  newNode.next = temp.next;
  temp.next = newNode;

  return head;
}
function deleteLinkedList(head, B) {
  // head is null
  if (head === null) {
    return head;
  }

  // if position is 0 or -1
  if (B <= 0) {
    // head = head.next;
    // return head;
    return head.next;
  }

  // let temp = head;
  // let len = 0;
  // while (temp.next) {
  //   if (len + 1 === B) {
  //     break;
  //   }
  //   temp = temp.next;
  //   len++;
  // }

  let temp = head;
  let len = 0;
  while (len < B - 1 && temp.next) {
    len++;
    temp = temp.next;
  }
  temp.next = temp.next.next;
  return head;
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

console.log(head);
// console.log(second);
// console.log(third);

printAll(head);
// 10 -> 20 -> 30
//  0 ->  1 ->  2
// Insert at 3rd location
head = insertLinkedList(head, 40, 3);
printAll(head);

// 10 -> 20 -> 30 -> 40
//  0 ->  1 ->  2 ->  3
// Insert at 10th location
head = insertLinkedList(head, 50, 10);
printAll(head);

// 10 -> 20 -> 30 -> 40 -> 50
//  0 ->  1 ->  2 ->  3 -> 4
// Insert at 10th location
head = insertLinkedList(head, 5, 0);
printAll(head);

// 10 -> 20 -> 30 -> 40 -> 50
//  0 ->  1 ->  2 ->  3 -> 4
// 10 -> 20 -> 40 -> 50
// Delete at 2nd location
head = deleteLinkedList(head, 2);
printAll(head);
