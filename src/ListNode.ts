export default class ListNode {
  data: any;
  next: any;
  previous: any;
  constructor(data: any) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}
