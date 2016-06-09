var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.noOfItems = 0;
};

Stack.prototype.push = function(val) {
  this.noOfItems++;
  this.storage[this.noOfItems - 1] = val;
};

Stack.prototype.pop = function() {
  if (this.noOfItems > 0) {
    this.noOfItems--;
    return this.storage[this.noOfItems];
  }
};

Stack.prototype.size = function() {
  return this.noOfItems;
};