function RemoveLastKthNode(head, k) {
    var ptr1 = head;

    while (k > 0 && ptr1 != null) {
        ptr1 = ptr1.next;
        k--;
    }
    if (k > 0) return root;
    ptr2 = head;

    //there are only  nodes in list so the node to be removed is the head node now
    if (ptr1 == null) {
        //remove head
        head = head.next;
        return head;
    }

    // Find the node before the node to be deleted
    while (ptr1.next != null) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    //ptr2 is the node before the node to be deleted
    var tempNode = ptr2.next;
    ptr2.next = ptr2.next.next;
    delete tempNode;

    return root;
}

function PrintLL(root) {
    var ptr = root;
    var ll = "";
    while (ptr != null) {
        ll+=ptr.key + " -> ";
        ptr = ptr.next;
    }

    return ll;
}

function LLNode(key) {
    this.next = null;
    this.key = key == undefined ? null : key;
}

var root = new LLNode(0);
var l2 = new LLNode(1);
var l3 = new LLNode(2);
var l4 = new LLNode(3);
var l5 = new LLNode(4);
var l6 = new LLNode(5);
var l7 = new LLNode(6);
var l8 = new LLNode(7);
var l9 = new LLNode(8);
var l10 = new LLNode(9);

root.next = l2;
l2.next = l3; l3.next = l4;
l4.next = l5; l5.next = l6;
l6.next = l7; l7.next = l8;
l8.next = l9; l9.next = l10;

root = RemoveLastKthNode(root, 4);
console.log(PrintLL(root));