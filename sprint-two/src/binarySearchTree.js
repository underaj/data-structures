var BinarySearchTree = function(value) {
  var tree = Object.create(treeMeth);
  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

var treeMeth = {
  insert: function(val) {
    if (this.value > val) {
      if (this.left === null) {
        this.left = BinarySearchTree(val);
      } else {
        this.left.insert(val);
      }
    } else {
      if (this.right === null) {
        this.right = BinarySearchTree(val);
      } else {
        this.right.insert(val);
      }
    }
  },
  contains: function(targ) {

  },
  depthFirstLog: function(cb) {

  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
