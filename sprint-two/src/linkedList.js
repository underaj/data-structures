var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if(list.head === null && list.tail === null){
      list.head = newNode;
      list.tail = newNode;
    }else{
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var value = list.head.value;
    list.head = list.head.next;
    return value;
  };

  list.contains = function(target, node) {
    // var currNode = list.head;
    // while(currNode !== null){
    //   if(currNode.value === target){
    //    return true; 
    //   }
    //   currNode = currNode.next;
    // }
    // return false;
    var currNode = node === undefined ? list.head : node;
    if (currNode === null){
      return false;
    }
    if(currNode.value === target){
      return true;
    }
    return list.contains(target, currNode.next);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


