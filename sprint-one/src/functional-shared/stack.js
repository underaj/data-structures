var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackObj = {
    key: 0
  };
  _.extend(stackObj, stackMethods);
  return stackObj;
};

var stackMethods = {
  push: function(value) {
    this[this.key] = value;
    this.key += 1;
  },
  pop: function() {
    if (this.key < 0) {
      return undefined;  
    } else {
      var popped = this[this.key - 1];
      if (this.key === 0) {
      } else {
        this.key--;
      }
      return popped;
    }
  },
  size: function() {
    return this.key;
  }
};


