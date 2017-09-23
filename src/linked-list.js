const Node = require('./node');

class LinkedList {
    constructor() {
       this._head = null;
       this._tail = null;
       this.length = 0;
    }

    append(data) {
        var node = new Node(data);
        if(this.length===0)
        {
            this._head = new Node(data, null, null);
            this._tail = new Node(data, this._head, null);
        }
        else {
            if(this.length===1){
                this._head.next=node;

            }
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var current = this._head;
        for(var i=0;i<index;i++)
          current=current.next;
        return current.data;
    }

    insertAt(index, data) {
        var current = this._head;
        for(var i=0;i<index;i++)
          current=current.next;
        current.data=data;
        return this;
    }

    isEmpty() {
        if(this.length)
          return false;
        else
          return true;
    }

    clear() {
        this._head = new Node();
        this._tail = new Node();
        this.length = 0;
        return this;
    }

    deleteAt(index) {
      if(index<this.length) {
        var current = this._head;
        for(var i=0;i<index;i++)
          current=current.next;
        if(this.length>1) {
          current.prev.next=current.next;
          current.next.prev=current.prev;
        }
        this.length--;
      } 
        return this;
    }

    reverse() {
        var temp = null;
        var current = this._head;
        while(current!==null) {
            temp=current.prev;
            current.prev=current.next;
            current.next=temp;
            current=current.prev;
        }
        if(temp!==null) {
            this._head=temp.prev;
        }
        current=this._head;
        for(var i=0;i<this.length-1;i++){
            current=current.next;
        }
        this._tail=current;
        this._tail.next=null;
        if(current.prev!==null)
          this._tail.prev=current.prev.prev;
        else 
          this._tail.prev=this._head;
        return this;
    }

    indexOf(data) {
        var index = -1;
        var current=this._head;
        for(var i=0;i<this.length;i++) {
            if(current.data===data) {
                index=i;
            }
            current=current.next;
        }
        return index;
    }
}

module.exports = LinkedList;

//const list = new LinkedList();
//list.append(4).reverse().deleteAt(0).clear().insertAt(0, 3);