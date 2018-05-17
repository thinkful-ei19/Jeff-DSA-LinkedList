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
    
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;
    
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
    
    let previousNode = this.head;
        
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
  insertBefore(item,before){
    if(this.head === null){
      this.insertFirst(item)
    }
    else {
      let currNode = this.head;
      let previousNode = this.head
      while(currNode.value !== before){
          
          previousNode = currNode;
          currNode=currNode.next;
      }
      let newItem = new _Node(item);
      previousNode.next = newItem;
      newItem.next = currNode;
  }
}
insertAfter(item, after){
if(!this.head){
  return null;
}
let currNode = this.find(after);
if(currNode){
  let nextNode = currNode.next;
  currNode.next = new _Node(item,nextNode);
  return 
}
  }

  insertAt(item, position){
    if(this.head === null){
        this.insertFirst(item);
    }
    else{
        let currNode = this.head;
        let previousNode = this.head;
        let counter = 0;
        while(counter !== position){
            previousNode = currNode;
            currNode = currNode.next;
            counter++;
        }
        let newItem = new _Node(item);
        previousNode.next = newItem;
        newItem.next = currNode;
    }
}
  

  }
  function display(item) {
    if (item.head) {
      console.log(item.head.value);
    }
    if (!item.head) {
      console.log('The item is empty');
    }
  
    let currNode = item.head;
  
    while (currNode.next !== null) {
      console.log(currNode.next.value);
      currNode = currNode.next;
    }
  }
  function size(item) {
    
    let num = 0;
    if (item.head) {
      num = 1;
    } else {
      console.log('The item is empty');
    }
  
    let currNode =item.head;
  
    while (currNode.next !== null) {
      num++;
      currNode = currNode.next;
    }
    console.log('The size IS:', num);
    return num;
  }
  function isEmpty(item) {
    if(!item.head) {
      console.log('This item is empty');
      return;
    } else {
      return false;
    }
  }
  function findPrevious(item, prev) {
    if (!item.head) {
      return;
    }
  
    let currNode = item.head;
    let prevNode = item.head;
  
    while (currNode.value !== prev) {
      prevNode = currNode;
      currNode = currNode.next;
    }
  
    console.log('Prev Node:', prevNode.value);
    return prevNode.value;
  }
  function findLast(item) {
    if(!item.head) {
      return;
    }
  
    let currNode = item.head;
  
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
  
    console.log('Last Item:', currNode.value);
    return currNode.value;
  }
  function WhatDoesThisProgramDo(lst){
    let current = lst.head;
    console.log("current",current)
    while(current !== null){
      
        let newNode = current;
       
        while (newNode.next !== null) {
          
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else{
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
  }
     function reverseShow(item) {
       
      if (!item.head) return;
        let currNode = item.head
        let nextNode = item.head.next;
        let prevNode = null;
        // console.log("here we have nextnode",nextNode)
      while(nextNode !== null){
        
       currNode.next = prevNode;
      //  console.log("here we have prevNode:",prevNode)
       prevNode = currNode;
      //  console.log("here we have currNode:",currNode)
       currNode = nextNode;
       nextNode = nextNode.next

        
      }
      currNode.next = prevNode
     item.head = currNode
  }

 function main(){
   const SLL = new LinkedList();
   SLL.insertFirst("Apollo");
   SLL.insertLast("Bommer");
   SLL.insertLast("Helo");
  //  SLL.insertLast("Helo");
   SLL.insertLast("Husker");
   SLL.insertLast("Starbuck");
   SLL.insertLast("Tauhida")
   SLL.remove("Husker")
   SLL.insertBefore("Lucky","Helo")
  //  SLL.insertAfter("Helo","Helo")
   SLL.insertAt("kat",3)
   SLL.remove("Tauhida")
  // display(SLL)
  // size(SLL)
  // isEmpty(SLL)
  // findPrevious(SLL, 'Helo');
  // findLast(SLL)
  // WhatDoesThisProgramDo(SLL)
  reverseShow(SLL)
  display(SLL)
 }
 main()
 