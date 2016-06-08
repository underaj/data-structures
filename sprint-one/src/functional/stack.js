var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var key = 0;
  var popped;


  // Implement the methods below
  someInstance.push = function(value) {
    storage[key] = value;
    key++;
  };

  someInstance.pop = function() {
    key--;
    popped = storage[key];
    return popped;
  };

  someInstance.size = function() {
    if(key < 0){
      key = 0;
    }
    return key;
  };

  return someInstance;
};
