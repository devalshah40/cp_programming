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
// Constructor : Initializes the LRUCache with capacity
class Node {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
/*
Hint 1
Lets approach this question bit by bit.
If lets say you never had to remove entries from the LRU cache because we had enough space, what would you use to support and get and set ?
A simple map / hashmap would suffice.

Alright, lets now look at the second part which is where the eviction comes in. We need a data structure which at any given instance can give me the least recently used objects in order. Lets see if we can maintain a linked list to do it. We try to keep the list ordered by the order in which they are used. So whenever, a get operation happens, we would need to move that object from a certain position in the list to the front of the list. Which means a delete followed by insert at the beginning.

Insert at the beginning of the list is trivial. How do we achieve erase of the object from a random position in least time possible ?

How about we maintain another map which stores the pointer to the corresponding linked list node.

Ok, now when we know the node, we would need to know its previous and next node in the list to enable the deletion of the node from the list. We can get the next in the list from next pointer ? What about the previous node ? To encounter that, we make the list doubly linked list.

Now, can you think of an approach using doubly linked list and the map(s) ?
*/
/*
Solution Approach
As discussed in the previous hint, we solve this problem using :

originalMap : A hashmap which stores the orginial key to value mapping
accessList : A doubly linked list which has keys ordered by their access time ( Most recently used key in front of the list to least recently used key at the end of the list ).
addressMap : A hashmap which saves the mapping of key to address of the key in accessList.
Lets see now how the get and set operation would work :

get(key) :
Look for the value corresponding to key in originalMap.
If key is not found, we don’t need to change accessList. So, return -1.
If key is found, then we need to move the node corresponding to the key to front of the list in accessList.
To do that, we find the address of the node for key from addressMap. We make the node->prev->next = node->next;, node->next->prev = node->prev;, node->prev = NULL; node->next = head; head->prev = node;
We update the head of the accessList to be node now.

set(key, value)
If the key is a new entry (it does not exist in the originalMap) AND the cache is full(size = capacity), then we would need to remove the least recently used key lkey.
We know that this key is the key corresponding to the last node in accessList which is accessible in O(1). To evict, we delete the last node from accessList, and the entry corresponding to lkey(from last node) in addressMap and originalMap.

Post this, there are 2 cases.

key is a new entry and is not present in originalMap. In this case, a new node is created for key and inserted at the head of accessList. A new (key,value) entry is created into originalMap and addressMap accordingly.
key is present in the map, in which case the value needs to be updated. We update the value in the originalMap and then we update the accessList for key exactly the way we did in the case of get operation.
A couple of insights for clean code :

Note that the update of accessList for key when key is present is a common operation in get and a subcase of set function. We should create a function for it and call that function in both cases to reduce redundancy.
Also, note that originalMap and addressMap are always of the same size with the same keys ( One with value and the other with address in linkedlist ). If you want to manage less maps, you can just have a masterMap which maps key to a pair of (value, address_in_list)
*/
/*
function ListNode(key, value) {
  this.key = key;
  this.val = value;
  this.prev = null;
  this.next = null;
}

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.head = new ListNode();
  this.tail = new ListNode();
  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.cache = new Map();
};

LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype.addToFront = function (node) {
  node.next = this.head.next;
  node.next.prev = node;
  this.head.next = node;
  node.prev = this.head;
};

LRUCache.prototype.removeFromBack = function () {
  const node = this.tail.prev;
  this.removeNode(node);
  return node;
};

LRUCache.prototype.get = function (key) {
  const node = this.cache.get(key);
  if (node === undefined) {
    return -1;
  }
  this.removeNode(node);
  this.addToFront(node);
  return node.val;
};

LRUCache.prototype.set = function (key, value) {
  const node = this.cache.get(key);
  if (node !== undefined) {
    node.val = value;
    this.removeNode(node);
    this.addToFront(node);
  } else {
    const newNode = new ListNode(key, value);
    this.cache.set(key, newNode);
    this.addToFront(newNode);
    this.size++;
    if (this.size > this.capacity) {
      const removedNode = this.removeFromBack();
      this.cache.delete(removedNode.key);
      this.size--;
    }
  }
};

module.exports = {
    LRUCache
};

*/

class LRUCache {
  capacity = 3;
  map = new Map();
  head = null;
  tail = null;

  constructor(capacity) {
    this.capacity = capacity;
  }
  search(value) {
    if (this.map.has(value)) {
      return this.map.get(value);
    }
    return null;
  }

  set(key, value) {
    let searchNode = this.search(key);
    if (!searchNode && this.map.size === this.capacity) {
      this.delete();
    } else if (searchNode) {
      // delete searchNode node
      if (searchNode === this.head) {
        this.delete();
      } else if (searchNode === this.tail) {
        this.deleteFromTail();
      } else {
        if (searchNode.prev) {
          searchNode.prev.next = searchNode.next;
          if (searchNode.next) {
            searchNode.next.prev = searchNode.prev;
          }
        }
      }
    }
    const node = new Node(key, value);
    this.map.set(key, node);
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.tail = node;
      this.head = node;
    }
  }

  delete() {
    const temp = this.head;
    const value = temp.key;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    temp.next = null;
    this.map.delete(value);

    if (temp === this.tail) {
      this.tail = null;
    }
  }

  deleteFromTail() {
    const temp = this.tail;
    const value = temp.key;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    temp.prev = null;
    this.map.delete(value);

    if (temp === this.head) {
      this.head = null;
    }
  }

  get(value) {
    let node = this.search(value);
    if (!node) {
      return -1;
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
    return node.data;
  }
}

// 6 1 S 2 1 S 2 2 G 2 S 1 1 S 4 1 G 2
// 7 2 G 2 S 2 6 G 1 S 1 5 S 1 2 G 1 G 2
const cache = new LRUCache(2);
// let node = cache.get(2);
// console.log(node);

cache.set(1, 1);
cache.set(2, 2);
cache.set(3, 3);

node = cache.get(1);
console.log(node);

// cache.set(1, 2);

// node = cache.get(1);
// console.log(node);

// node = cache.get(2);
// console.log(node);

// node = cache.get(2);
// console.log(node);
// node = cache.get(3);
// console.log(node);

// // node = cache.get(4);
// // console.log(node);

// node = cache.get(1);
// console.log(node);

// node = cache.get(2);
// console.log(node);

// node = cache.get(3);
// console.log(node);

// let node = cache.get(1);
// console.log(node);
// node = cache.get(1);
// console.log(node);
