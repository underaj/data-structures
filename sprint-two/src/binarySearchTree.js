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
    if (this.value === targ) {
      return true;
    } else if (this.value > targ) {
      if (this.left !== null) {
        return this.left.contains(targ);
      } else {
        return false;
      }
    } else {
      if (this.right !== null) {
        return this.right.contains(targ);
      } else {
        return false;
      }
    }
  },
  depthFirstLog: function(cb) {
    var applyCb = function(node) {
      cb(node.value);

      if (node.left !== null) {
        applyCb(node.left);
      }

      if (node.right !== null) {
        applyCb(node.right);
      }
    };

    applyCb(this);

    // cb(this.value);

    // if (this.left !== null) {
    //   this.left.depthFirstLog(cb);
    // }

    // if (this.right !== null) {
    //   this.right.depthFirstLog(cb);
    // }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */