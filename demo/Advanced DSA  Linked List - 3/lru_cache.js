/*
Q3. LRU Cache
Design and implement a data structure for Least Recently Used (LRU) cache. 
It should support the following operations: get and set.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
set(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least recently used item before inserting the new item.
The LRUCache will be initialized with an integer corresponding to its capacity. Capacity indicates the maximum number of unique keys it can hold at a time.

Definition of "least recently used" : An access to an item is defined as a get or a set operation of the item. "Least recently used" item is the one with the oldest access time.

NOTE: If you are using any global variables, make sure to clear them in the constructor.

Example :

Input : 
         capacity = 2
         set(1, 10)
         set(5, 12)
         get(5)        returns 12
         get(1)        returns 10
         get(10)       returns -1
         set(6, 14)    this pushes out key = 5 as LRU is full. 
         get(5)        returns -1 
*/
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class LRUCache {
  capacity = 3;
  map = new Map();
  head = null;
  tail = null;

  search(value) {
    if (this.map.has(value)) {
      return this.map.get(value);
    }
    return null;
  }

  insert(value) {
    if (this.map.size === this.capacity) {
      this.delete();
    }
    const node = new Node(value);
    this.map.set(value, node);
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.tail = node;
      this.head = node;
    }
    return node;
  }

  delete() {
    const temp = this.head;
    const value = temp.data;
    this.head = this.head.next;
    this.head.prev = null;
    temp.next = null;
    this.map.delete(value);
  }

  get(value) {
    let node = this.search(value);
    if (!node) {
      node = this.insert(value);
    } else {
      if (node.prev) {
        node.prev.next = node.next;
        if (node.next) {
          node.next.prev = node.prev;
        }
      }
      // head
      if (node === this.head && node.next) {
        this.head = this.head.next;
        this.head.prev = null;
      }
      // tail
      if (node === this.tail && node.prev) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }

      node.next = null;
      if (node !== this.tail) node.prev = this.tail;
      if (node !== this.tail) this.tail.next = node;
      this.tail = node;
    }
    return node;
  }
}

const cache = new LRUCache();
let node = cache.get(1);
console.log(node);
node = cache.get(2);
console.log(node);
node = cache.get(3);
console.log(node);

// node = cache.get(4);
// console.log(node);

node = cache.get(1);
console.log(node);

// node = cache.get(2);
// console.log(node);

// node = cache.get(3);
// console.log(node);

// let node = cache.get(1);
// console.log(node);
// node = cache.get(1);
// console.log(node);
