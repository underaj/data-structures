var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var queueSize = 0;
  var firstOut = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[queueSize] = value;
    queueSize++;
  };

  someInstance.dequeue = function() {
    if (queueSize > firstOut) {
      var curEle = storage[firstOut];
      firstOut++;
      return curEle;
    }
  };

  someInstance.size = function() {
    if(queueSize - firstOut < 0) {
      return 0;
    }else{
      return queueSize - firstOut;
    }
  };

  return someInstance;
};
