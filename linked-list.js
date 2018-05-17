class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    console.log("item",item)
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      console.log("TempNode is here :",tempNode)
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;
    console.log("currNode:",currNode)
    if (!this.head) {
      return null;
    }
  
    while (currNode.value !== item) {
    
      if (currNode.next === null) {
        return null;
      } else {
      
        currNode = currNode.next;
      }
    }
  
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    console.log("currNode Say what!:",currNode)
    let previousNode = this.head;
        console.log("bring it back with",previousNode)
    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found on list');
      return;
    }
    previousNode.next = currNode.next;
  }
}
 function main(){
   const SLL = new LinkedList();
   SLL.insertFirst("Apollo");
   SLL.insertLast("Bommer");
   SLL.insertLast("Helo");
   SLL.insertLast("Husker");
   SLL.insertLast("Starbuck");
   SLL.insertLast("Tauhida")

   console.log("Heres SLL",SLL)

 }
 main()