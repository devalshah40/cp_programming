/*
Problem Description
Merge two sorted linked lists, A and B, and return it as a new list.

The new list should be made by splicing together the nodes of the first two lists and should also be sorted.



Problem Constraints
0 <= |A|, |B| <= 105



Input Format
The first argument of input contains a pointer to the head of linked list A.

The second argument of input contains a pointer to the head of linked list B.



Output Format
Return a pointer to the head of the merged linked list.



Example Input
Input 1:

 A = 5 -> 8 -> 20
 B = 4 -> 11 -> 15
Input 2:

 A = 1 -> 2 -> 3
 B = Null


Example Output
Output 1:

 4 -> 5 -> 8 -> 11 -> 15 -> 20
Output 2:

 1 -> 2 -> 3


Example Explanation
Explanation 1:

 Merging A and B will result in 4 -> 5 -> 8 -> 11 -> 15 -> 20 
Explanation 2:

 We don't need to merge as B is empty. 

 */

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
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
let head = new Node(10);
let second = new Node(30);
head.next = second;
let third = (second.next = new Node(50));
second.next = third;

console.log(head);
printAll(head);

let head1 = new Node(20);
second = new Node(40);
head1.next = second;
third = (second.next = new Node(60));
second.next = third;

console.log(head1);
printAll(head);

let head = mergeTwoLists(head, head1);
printAll(head);