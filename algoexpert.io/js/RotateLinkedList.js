function RotateLinkedList(head, k) {
    var ptr = head;
    var dist = k;
    while (dist > 1) {
        ptr = ptr.next;
        dist--;
    }
    var ptr2 = ptr;
    while (ptr2.next != null) {
        ptr2 = ptr2.next;
    }
    ptr2.next = head;
    head = ptr.next;
    ptr.next = null;

    return head;
}

function LLNode(key) {
    this.next = null;
    this.key = key == undefined ? null : key;
}
function PrintLL(root) {
    var ptr = root;
    var ll = "";
    while (ptr != null) {
        ll += ptr.key + " -> ";
        ptr = ptr.next;
    }

    return ll;
}

var root = new LLNode(0);
var l2 = new LLNode(1);
var l3 = new LLNode(2);
var l4 = new LLNode(3);
var l5 = new LLNode(4);
var l6 = new LLNode(5);

root.next = l2;
l2.next = l3; l3.next = l4; l4.next = l5; l5.next = l6;

var res= RotateLinkedList(root, 3);

console.log(PrintLL(res));
