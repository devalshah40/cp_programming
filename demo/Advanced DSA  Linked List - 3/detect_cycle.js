class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
function detectCyleAndFirstNodeUsingSet(head) {
  const set = new Set();
  let temp = head;
  let isCycle = false;
  let cycleFirstNode;

  while (temp !== null) {
    if (set.has(temp)) {
      isCycle = true;
      cycleFirstNode = temp;
      break;
    }
    set.add(temp);
    console.log(temp.data);
    temp = temp.next;
  }
  console.log(cycleFirstNode);
  console.log(isCycle);
}
function detectCyleUsingSlowFast(head) {
  let slow = head;
  let fast = head;
  let isCycle = false;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      isCycle = true;
      break;
    }
  }
  console.log(isCycle);
}
function detectCyleandFirstNodeUsingSlowFast(head) {
  let slow = head;
  let fast = head;
  let isCycle = false;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      isCycle = true;
      break;
    }
  }
  fast = head;
  while (isCycle && slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  if(isCycle) {
    return slow;
  } else {
    return false;
  }
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
let fourth = (third.next = new Node(40));
third.next = fourth;
fourth.next = second;

// console.log(head);
// printAll(head);

// detectCyleAndFirstNodeUsingSet(head);
detectCyleUsingSlowFast(head);
let ans = detectCyleandFirstNodeUsingSlowFast(head);
console.log(ans);
