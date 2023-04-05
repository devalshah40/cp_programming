class MinStack {
  constructor() {
    // Initalize your variables here
    this.stack = [];
    this.minStack = [];
  }
  push(e) {
    this.stack.push(e);
    const top = this.minStack[this.minStack.length - 1];
    if (top === undefined || e <= top) {
      this.minStack.push(e);
    }
  }
  pop() {
    const removedEle = this.stack.pop();
    const top = this.minStack[this.minStack.length - 1];
    if (removedEle === top) {
      this.minStack.pop();
    }
  }
  top() {
    return this.stack.length ? this.stack[this.stack.length - 1] : -1;
  }
  getMin() {
    // return minimum
    return this.minStack.length ? this.minStack[this.minStack.length - 1] : -1;
  }
}
let ans = 0;
const minStack = new MinStack();
minStack.push(5);
minStack.push(9);
minStack.push(3);
minStack.push(4);
minStack.push(2);
ans = minStack.getMin();
console.log(ans);
minStack.pop();
ans = minStack.getMin();
console.log(ans);
