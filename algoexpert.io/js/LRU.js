function LRU(size) {
    var hash = {};
    var ddl = new DDL();

    this.insertKeyValuePair = function (key, value) {
        if (ddl.length == size) {
            var itemNode = ddl.deleteFirstItem();
            delete hash[itemNode.key.key]
            delete itemNode;
            return;
        }
        if (hash[key]) return "key already exists";
        var itemNode = ddl.addItemAtEnd({ value: value, key: key });
        hash[key] = itemNode;
    }

    this.getValue = function (key) {
        if (!hash[key]) return null;
        var node = hash[key];
        ddl.shiftNodeToLast(node);
    }

    this.getMostRecentKey = function () {
        return ddl.getLastItem().key;
    }

}

function DDLNode(key) {
    this.key = key;
    this.next = null;
    this.prev = null
}

function DDL() {
    var head = null;
    var tail = null;
    this.length = 0;

    this.getLastItem = () => {
        return tail;
    }

    this.addItemAtEnd = function (key) {
        var newNode = new DDLNode(key);
        if (head == null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = tail.next;
        }
        this.length++;
        return newNode;

    }


    this.shiftNodeToLast = (node) => {
        if (node.prev == null) { return; }
        if (node.prev != null && node.next == null) {
            node.prev.next = node.next;
        }
        else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        node.next = head;
        head.prev = node;
        node.prev = null;
        head = node;
    }

    this.deleteNode = function (node) {
        var temp = node;
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.length--;
        return temp;

    }

    this.deleteFirstItem = function () {
        if (tail == head && tail == null) {
            return null;
        }
        else if (tail == head) {
            var temp = head;
            head = null; tail = null;
            this.length--;
            return temp;
        }
        var temp = head;
        head = head.next;
        this.length--;
        return head;
    }

    this.deleteLastItem = function () {
        var temp = tail;
        tail = tail.prev;
        this.length--;
        return temp;
    }
}
