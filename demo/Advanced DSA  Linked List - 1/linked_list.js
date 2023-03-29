// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  head = null;
  constructor() {}

  insert_node(pos, no) {
    let newNode = new Node(no);
    // if position is 1
    if (pos <= 1) {
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }

    // head is null
    if (this.head === null) {
      this.head = newNode;
      return newNode;
    }

    let temp = this.head;
    let len = 1;
    while (len < no - 1 && temp.next) {
      temp = temp.next;
      len++;
    }

    newNode.next = temp.next;
    temp.next = newNode;

    return this.head;
  }

  delete_node(pos) {
    // head is null
    if (this.head === null) {
      return this.head;
    }

    // if position is 0 or -1
    if (pos <= 1) {
      const temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      return this.head;
    }

    let temp = this.head;
    let len = 1;
    while (len < pos - 2 && temp.next) {
      len++;
      temp = temp.next;
    }
    if (temp.next) temp.next = temp.next.next;
    return this.head;
  }

  print_ll() {
    let ans = '';
    let temp = this.head;

    while (temp !== null) {
      ans += temp.data + ' ';
      temp = temp.next;
    }
    console.log(ans.slice(0, -1));
    return;
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
