function ReverseLinkedList(head) {
    if (head == null || head.next == null) return head;

    var ptr1 = head;
    var ptr2 = head.next;
    ptr1.next = null;

    while (ptr2 != null) {
        var temp = ptr2;
        ptr2 = ptr2.next;
        temp.next = ptr1;
        ptr1 = temp;
    }
    return ptr1;
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

root.next = l2;
l2.next = l3; l3.next = l4; l4.next = l5;

var res = ReverseLinkedList(root);

console.log(PrintLL(res));