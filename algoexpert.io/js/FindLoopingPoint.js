function FindLoopingPoint(head) {
    if (head == null) return "Empty list";
    var ptr1 = head;
    var ptr2 = head;

    while (ptr1 != null && ptr2 != null) {
        if (ptr2.next == null || ptr2.next.next == null) return "No loop found";
        ptr1 = ptr1.next;
        ptr2 = ptr2.next.next;
        if (ptr1 == ptr2) break;
    }

    var startPtr = head;

    while (startPtr != ptr1) {
        ptr1 = ptr1.next;
        startPtr = startPtr.next;
    }

    return startPtr;
}


function LLNode(key) {
    this.next = null;
    this.key = key == undefined ? null : key;
}


var l1 = new LLNode(1);
var l2 = new LLNode(2); l1.next = l2;
var l3 = new LLNode(3); l2.next = l3;
var l4 = new LLNode(4); l3.next = l4;
var l5 = new LLNode(5); l4.next = l5;
var l6 = new LLNode(6); l5.next = l6;
var l7 = new LLNode(7); l6.next = l7;
l7.next = l4;

var res = FindLoopingPoint(l1);

console.log(res.key);