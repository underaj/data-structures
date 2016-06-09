var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket;
  var tuple = [k, v];
  if (this._storage.get(index) === undefined) {
    // insert bucket

    bucket = this._storage.set(index, );
  } else {

  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// Before inserting, check if the 

// this._storage.each(function(bucket, i, storage) {
//   if (i === index) {

//   }
// });