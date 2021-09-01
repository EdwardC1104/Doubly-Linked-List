import ListNode from "./ListNode";

export default class DoublyLinkedList {
  head: any;
  constructor(head = null) {
    this.head = head;
  }

  add(data: any) {
    const node = new ListNode(data); // Create a new node class with the data
    // First node in the list
    if (this.head === null) this.head = node;
    else {
      let tail = this.head;
      while (tail.next !== null) tail = tail.next; // Find the end of the last
      node.previous = tail;
      tail.next = node; // Add new node to the end of the list
    }
  }

  remove(data: any) {
    if (this.head === null) return;

    if (this.head.data === data) {
      // List only has one node
      this.head = this.head.next; // Overwrites the selected node with the next node
      return;
    }

    let node = this.head.next;

    while (node.data !== data) {
      // Loop until the data is reached
      node = node.next;
    }

    node.previous.next = node.next; // Overwrites the selected node with the next node
    if (node.previous.next !== null)
      node.previous.next.previous = node.previous; // Overwrites the next node's previous value
  }

  pop() {
    if (this.head === null) return; // Can't remove a node from an empty list

    if (this.head.next === null) {
      // List only has one node
      this.head = null;
      return;
    }

    let tail = this.head.next;

    while (tail.next !== null) {
      // Loop until the end of the list is reached
      tail = tail.next;
    }

    tail.previous.next = null; // Overwrites the last node
  }

  clear() {
    this.head = null; // Removes all nodes
  }

  length() {
    if (this.head === null) return 0; // No nodes = no length

    let count = 0;
    let node = this.head; // Start at first node
    while (node !== null) {
      count++;
      node = node.next;
    }
    return count;
  }
}
