class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }
  push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
  }
  length() {
    return this.top;
  }
  peek() {
    return this.data[this.top - 1];
  }
  isEmpty() {
    return this.top === 0;
  }
  pop() {
    if (this.isEmpty() === false) {
      this.top = this.top - 1;
      return this.data.pop(); // removes the last element
    }
  }
  print() {
    let top = this.top - 1; // because top points to index where new    element to be inserted
    while (top >= 0) {
      // print upto 0th index
      console.log(this.data[top]);
      top--;
    }
  }
  reverse() {
    return this._reverse(this.top - 1);
  }
  _reverse(index) {
    if (index === -1) {
      return '';
    }
    return this._reverse(index - 1) + this.data[index];
  }
}

// console.log('Creating Stack');
// let stack = new Stack();

// console.log('\n-------\nStack isEmpty = ', stack.isEmpty());

// console.log('Adding 1, 2, 3 to the stack');
// stack.push(1);
// stack.push(2);
// stack.push(3);

// console.log('\n-------\nStack isEmpty = ', stack.isEmpty());

// console.log('\n-------\nStack Length = ', stack.length());

// console.log('\n-------\nStack Peek Element = ', stack.peek());

// console.log('\n-------\nStack Pop =', stack.pop());
// console.log('\n-------\nStack Pop = ', stack.pop());
// console.log('\n-------\nStack Pop =', stack.pop());

// console.log('\n-------\nStack isEmpty = ', stack.isEmpty());
module.exports = Stack;
