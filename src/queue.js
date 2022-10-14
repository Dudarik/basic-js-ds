const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.store = null;
  }
  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.store;
  }

  enqueue(value) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (!this.store) {
      this.store = new ListNode(value);
      return this;
    }
    let pStore = this.store;
    while (pStore.next) pStore = pStore.next;

    pStore.next = new ListNode(value);
    return this;
  }

  dequeue() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    const ret = this.store.value;
    this.store = this.store.next;
    return ret;
  }
}

module.exports = {
  Queue,
};
