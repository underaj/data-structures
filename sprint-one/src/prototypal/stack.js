var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.noOfItems = 0;
  return instance;
};

var stackMethods = {
  push: function(val){
    this.noOfItems++;
    this.storage[this.noOfItems - 1] = val;
  },
  pop: function(){
    if(this.noOfItems === 0){
    }else{
      var val = this.storage[this.noOfItems - 1];
      this.noOfItems--;
      return val;
    }
  },
  size: function(){
    return this.noOfItems;
  }
};


