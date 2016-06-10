describe('doublyLinkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = DoublyLinkedList();
  });

  describe('properties', function() {
    it('should have a head and tail', function() {
      expect(linkedList).to.have.property('head');
      expect(linkedList).to.have.property('tail');
    });
  });

  describe('methods', function() {
    it('should have method named "addToHead"', function() {
      expect(linkedList.addToHead).to.be.a('function');
    });
    it('should have method named "addToTail"', function() {
      expect(linkedList.addToTail).to.be.a('function');
    });
    it('should have method named "removeHead"', function() {
      expect(linkedList.removeHead).to.be.a('function');
    });
    it('should have method named "removeTail"', function() {
      expect(linkedList.removeTail).to.be.a('function');
    });
    it('should have method named "contains"', function() {
      expect(linkedList.contains).to.be.a('function');
    });
  });

  describe('#addToHead', function() {
    it('should designate a new head', function() {
      linkedList.addToHead(4);
      expect(linkedList.head.value).to.equal(4);
      linkedList.addToHead(5);
      expect(linkedList.head.value).to.equal(5);
    });

    it('should designate a new tail when list is empty', function() {
      linkedList.addToHead(4);
      expect(linkedList.tail.value).to.equal(4);
      linkedList.addToHead(5);
      expect(linkedList.tail.value).to.equal(4);
    });

    it('should set the new head.next to old head', function() {
      linkedList.addToHead(4);
      var oldHead = linkedList.head;
      linkedList.addToHead(5);
      var newHead = linkedList.head;
      expect(newHead.next).to.be.oldHead;
    });

    it('should set old head.prev to head', function() {
      linkedList.addToHead(4);
      var oldHead = linkedList.head;
      linkedList.addToHead(5);
      var newHead = linkedList.head;
      expect(oldHead.prev).to.be.newHead;
    });
  });

  describe('#addToTail', function() {
    it('should designate a new tail', function() {
      linkedList.addToTail(4);
      expect(linkedList.tail.value).to.equal(4);
      linkedList.addToTail(5);
      expect(linkedList.tail.value).to.equal(5);
    });

    it('should designate a new head when list is empty', function() {
      linkedList.addToTail(4);
      expect(linkedList.head.value).to.equal(4);
      linkedList.addToTail(5);
      expect(linkedList.head.value).to.equal(4);
    });

    it('should set the new tail.prev to old tail', function() {
      linkedList.addToTail(4);
      var oldTail = linkedList.tail;
      linkedList.addToTail(5);
      var newTail = linkedList.tail;
      expect(newTail.prev).to.be.oldTail;
    });

    it('should set old tail.next to tail', function() {
      linkedList.addToTail(4);
      var oldTail = linkedList.tail;
      linkedList.addToTail(5);
      var newTail = linkedList.tail;
      expect(oldTail.next).to.be.newTail;
    });
  });

  describe('#removeHead', function() {
    it('should remove the head', function() {
      linkedList.addToTail(4);
      linkedList.addToTail(5);
      expect(linkedList.head.value).to.equal(4);
      linkedList.removeHead();
      expect(linkedList.head.value).to.equal(5);
    });

    it('should set new head.prev to null', function() {
      linkedList.addToTail(4);
      linkedList.addToTail(5);
      expect(linkedList.head.prev).to.be.null;
      linkedList.removeHead();
      expect(linkedList.head).to.equal(linkedList.tail);
      expect(linkedList.head.prev).to.be.null;
    });

    it('should set head and tail to null when last item is removed', function() {
      linkedList.addToTail(4);
      linkedList.addToTail(5);
      expect(linkedList.head.value).to.equal(4);
      linkedList.removeHead();
      expect(linkedList.head.value).to.equal(5);
      linkedList.removeHead();
      expect(linkedList.tail).to.be.null;
      expect(linkedList.head).to.be.null;
    });

    it('should return the value of the former head', function() {
      linkedList.addToTail(4);
      expect(linkedList.removeHead()).to.equal(4);
    });

    it('should be undefined if list is empty', function() {
      expect(linkedList.removeHead()).to.be.undefined;
    });
  });

  describe('#removeTail', function() {
    it('should remove the tail', function() {
      linkedList.addToTail(4);
      linkedList.addToTail(5);
      expect(linkedList.tail.value).to.equal(5);
      linkedList.removeTail();
      expect(linkedList.tail.value).to.equal(4);
    });

    it('should set new tail.next to null', function() {
      linkedList.addToTail(4);
      linkedList.addToTail(5);
      expect(linkedList.head.prev).to.be.null;
      linkedList.removeTail();
      expect(linkedList.head).to.equal(linkedList.tail);
      expect(linkedList.head.prev).to.be.null;
    });

    it('should set head and tail to null when last item is removed', function() {
      linkedList.addToTail(4);
      linkedList.addToTail(5);
      expect(linkedList.tail.value).to.equal(5);
      linkedList.removeTail();
      expect(linkedList.tail.value).to.equal(4);
      linkedList.removeTail();
      expect(linkedList.tail).to.be.null;
      expect(linkedList.head).to.be.null;
    });

    it('should return the value of the former tail', function() {
      linkedList.addToTail(4);
      expect(linkedList.removeTail()).to.equal(4);
    });

    it('should be undefined if list is empty', function() {
      expect(linkedList.removeTail()).to.be.undefined;
    });
  });

  describe('#contains', function() {
    beforeEach(function() {
      linkedList.addToHead(2);
      linkedList.addToTail(4);
      linkedList.addToTail(5);
      linkedList.addToHead(3);
    });

    it('should be true for each value that was added', function() {
      expect(linkedList.contains(2)).to.be.true;
      expect(linkedList.contains(4)).to.be.true;
      expect(linkedList.contains(5)).to.be.true;
      expect(linkedList.contains(3)).to.be.true;
      expect(linkedList.contains(6)).to.be.false;
    });

    it('should be false for a value that was removed', function() {
      expect(linkedList.contains(3)).to.be.true;
      linkedList.removeHead();
      expect(linkedList.contains(3)).to.be.false;
    });
  });

  describe('linking', function() {
    beforeEach(function() {
      linkedList.addToTail(4);
      linkedList.addToTail(5);
      linkedList.addToHead(3);
      linkedList.addToHead(6);
    });

    it('should be linked forward correctly for each node', function() {
      expect(linkedList.head.value).to.equal(6);
      expect(linkedList.head.next.value).to.equal(3);
      expect(linkedList.head.next.next.value).to.equal(4);
      expect(linkedList.head.next.next.next.value).to.equal(5);
      expect(linkedList.head.next.next.next.next).to.be.null;
    });

    it('should be linked backward correctly for each node', function() {
      expect(linkedList.tail.value).to.equal(5);
      expect(linkedList.tail.prev.value).to.equal(4);
      expect(linkedList.tail.prev.prev.value).to.equal(3);
      expect(linkedList.tail.prev.prev.prev.value).to.equal(6);
      expect(linkedList.tail.prev.prev.prev.prev).to.be.null;
    });
  });
});