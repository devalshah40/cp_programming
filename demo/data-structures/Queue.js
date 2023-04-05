class Queue {
  constructor(length = 0) {
    this.data = [];
    this.size = length;
    this.currentSize = 0;
    this._front = -1;
    this._rear = -1;
  }
  enqueue(element) {
    if (this.size !== this.currentSize) {
      if (this._front === -1) {
        this._front = this._front + 1;
      }
      this._rear = (this._rear + 1) % this.size;
      this.data[this._rear] = element;
      this.currentSize++;
    }
    return -1;
  }
  front() {
    return this.data[this._front] ?? -1;
  }
  dequeue() {
    if (this.isEmpty() === false) {
      const data = this.data[this._front];
      this._front = (this._front + 1) % this.size;
      this.currentSize--;
      return data;
    }
    return -1;
  }
  isEmpty() {
    return this.currentSize === 0;
  }
  length() {
    return this.currentSize;
  }
  // print() {
  //   let front = this.front - 1; // because front points to index where new    element to be inserted
  //   while (front >= 0) {
  //     // print upto 0th index
  //     console.log(this.data[front]);
  //     front--;
  //   }
  // }
  // reverse() {
  //   return this._reverse(this.front - 1);
  // }
  // _reverse(index) {
  //   if (index === -1) {
  //     return '';
  //   }
  //   return this._reverse(index - 1) + this.data[index];
  // }
}

console.log('Creating Queue');
let queue = new Queue(5);

console.log('\n-------\nQueue isEmpty = ', queue.isEmpty());

console.log('Adding 1, 2, 3 to the queue');
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log('\n-------\nQueue isEmpty = ', queue.isEmpty());

console.log('\n-------\nQueue Length = ', queue.length());

console.log('\n-------\nQueue Peek Element = ', queue.front());

console.log('\n-------\nQueue Pop =', queue.dequeue());
console.log('\n-------\nQueue Pop = ', queue.dequeue());

queue.enqueue(6);
queue.enqueue(7);
console.log('\n-------\nQueue isEmpty = ', queue.front());
module.exports = Queue;
