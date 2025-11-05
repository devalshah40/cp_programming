/*
Problem Description
You are given A which is the head of a linked list. Also given is the value B and position C. Complete the function that should insert a new node with the said value at the given position.

Notes:

In case the position is more than length of linked list, simply insert the new node at the tail only.
In case the pos is 0 or less, simply insert the new node at head only.
Follow 0-based indexing for the node numbering.


Problem Constraints
1 <= size of linked list <= 105

1 <= value of nodes <= 109

1 <= B <= 109

0 <= C <= 105



Input Format
The first argument A is the head of a linked list.

The second argument B is an integer which denotes the value of the new node

The third argument C is an integer which denotes the position of the new node



Output Format
Return the head of the linked list


Example Input
Input 1:
A = 1 -> 2
B = 3
C = 0
Input 2:
A = 1 -> 2
B = 3
C = 1


Example Output
Output 1:
3 -> 1 -> 2
Output 2:
1 -> 3 -> 2


Example Explanation
For Input 1:
The new node is add to the head of the linked list
For Input 2:
The new node is added after the first node of the linked list
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
