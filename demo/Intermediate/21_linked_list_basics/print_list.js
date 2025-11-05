/*
Problem Description
You are given A which is the head of a linked list. Print the linked list in space separated manner.

Note : The last node value must also be succeeded by a space and after printing the entire list you should print a new line



Problem Constraints
1 <= size of linked list <= 105

1 <= value of nodes <= 109



Input Format
The first argument A is the head of a linked list.


Output Format
You dont need to return anything


Example Input
Input 1:
A = 1 -> 2 -> 3
Input 2:
A = 4 -> 3 -> 2 -> 1


Example Output
Output 1:
1 2 3
Output 2:
4 3 2 1


Example Explanation
For Input 1:
We print the given linked list
For Input 2:
We print the given linked list
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function printAll(head) {
  let temp = head;

  while (temp !== null) {
    console.log(temp.data);
    temp = temp.next;
  }
}

function printAll2(head) {
  let temp = head;

  while (temp.next !== null) {
    console.log(temp.data);
    temp = temp.next;
  }
  console.log(temp.data);
}
let head = new Node(10);

let second = new Node(20);
head.next = second;
let third = (second.next = new Node(30));
second.next = third;

console.log(head);
console.log(second);
console.log(third);

printAll(head);
printAll2(head);
