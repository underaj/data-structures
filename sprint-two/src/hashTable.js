var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket;
  var tuple = [k, v];
  var keyNoExists = true;
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [tuple]);
  } else {
    bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) {
      if (k === bucket[i][0]) {
        keyNoExists = false;
        bucket[i][1] = v;
      } else if (keyNoExists && bucket.length - 1 === i) {
        bucket.push(tuple);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      delete bucket[i][1];
    }
  }
};

// linear

/*
 * Complexity: What is the time complexity of the above functions?
 */

// Before inserting, check if the 

// this._storage.each(function(bucket, i, storage) {
//   if (i === index) {

//   }
// });