var DoublyLinkedList = function() {
  var list = Object.create(dListMethods);
  list.head = null;
  list.tail = null;

  return list;
};

dListMethods = {
  addToHead: function(value) {
    var node = doubleLinked(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  },
  addToTail: function(value) {
    var node = doubleLinked(value);
    if (this.tail === null) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  },
  removeHead: function() {
    var curNode = this.head;
    if (curNode !== null) {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
      return curNode.value;
    }
  },
  removeTail: function() {
    var curNode = this.tail;
    if (this.head === null && this.tail == null) {
      return;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else if (this.head.next === this.tail) {
      this.head.next = null;
      this.tail.prev = this.head;
      this.tail = this.head;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    return curNode.value;
    
    // var curNode = this.tail;
    // if (curNode !== null) {
    //   this.tail = this.tail.prev;
    //   if (this.tail === null) {
    //     this.head = null;
    //   } else {
    //     this.tail.next = null;
    //   }
    //   return curNode.value;
    // }
  },
  contains: function(target) {
    var curNode = this.head;
    while (curNode !== null) {
      if (curNode.value === target) {
        return true;
      } else {
        curNode = curNode.next;
      }
    }

    return false;
  }

};

var doubleLinked = function(value) {
  var double = {};
  double.prev = null;
  double.next = null;
  double.value = value;
  return double;
};