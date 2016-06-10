

// Instantiate a new graph
var Graph = function() {
  this.obj = {};
  this.no = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.obj[this.no] = [node];
  this.no++;
};
// constant

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.obj) {
    if (this.obj[key][0] === node) {
      return true;
    }
  }

  return false;
};

// linear

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.obj) {
    if (this.obj[key][0] === node) {
      delete this.obj[key];
    }
  }
};

// linear

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var key in this.obj) {
    if (this.obj[key][0] === fromNode) {
      return _.contains(this.obj[key], toNode);
    }
  }
};

// O(2n) linear

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var key;
  for (key in this.obj) {
    if (this.obj[key][0] === fromNode) {
      this.obj[key].push(toNode);
    } else if (this.obj[key][0] === toNode) {
      this.obj[key].push(fromNode);
    }
  }
};

// linear

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var ind;
  for (key in this.obj) {
    if (this.obj[key][0] === fromNode) {
      ind = _.indexOf(this.obj[key], toNode);
      this.obj[key].splice(ind, 1);
    } else if (this.obj[key][0] === toNode) {
      ind = _.indexOf(this.obj[key], fromNode);
      this.obj[key].splice(ind, 1);
    }
  }
};

// linear

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.obj) {
    cb(this.obj[key][0]);
  }
};

// linear

/*
 * Complexity: What is the time complexity of the above functions?
 */


