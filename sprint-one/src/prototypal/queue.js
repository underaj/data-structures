var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.head = 0;
  instance.tail = 0;
  return instance;
};

var queueMethods = {
  dequeue: function() {
    if (this.head < this.tail) {
      var val = this.storage[this.head];
      this.head++;
      return val;
    }
  },
  enqueue: function(val) {
    this.tail++;
    this.storage[this.tail - 1] = val;
  },
  size: function() {
    return this.tail - this.head;
  }
};


