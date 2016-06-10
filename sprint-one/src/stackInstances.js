var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    key: 0
  };
  var myVal = 0;
  _.extend(instance, stackMethods);
  return instance;
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
var myInst = [];
for (var i = 0; i < 100; i++) {
  
  myInst.push(Stack());
}
