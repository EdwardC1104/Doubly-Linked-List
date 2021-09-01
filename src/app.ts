import DoublyLinkedList from "./DoublyLinkedList";

const list = new DoublyLinkedList();

list.add("one");
list.add("two");
list.add("three");
list.add("four");

console.log(list.head.next.previous.next.next.next.previous.next.previous.data);

console.log(list.length());

list.pop();

console.log(list.length());

list.remove("one");
list.remove("three");

console.log(list.length());

list.clear();

console.log(list.length());
