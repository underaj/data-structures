var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  console.log(Tree(value));
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var result = false;
  var searchTree = function(node) {
    console.log(node.value);
    if (node.value === target) {
      result = true;
    }
    if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        searchTree(node.children[i]);
      }
    }
  };

  searchTree(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

//newtree.value === target return true
// if there are children loop through
//else loop through children
// call function at children[i]

// 
