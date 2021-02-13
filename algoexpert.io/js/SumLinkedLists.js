function LinkedListSum(node1, node2) {
    if (node1 == null) return node2;
    if (node2 == null) return node1;

    var output = { list: null };
    var carry = { val: 0 }

    var l1Size = LLLength(node1);
    var l2Size = LLLength(node2);

    var ptr1 = node1; var ptr2 = node2;
    if (l1Size > l2Size) {
        var diff = l1Size - l2Size;
        while (diff != 0) {
            ptr1 = ptr1.next;
            diff--;
        }
    }
    else if (l2Size > l1Size) {
        var diff = l2Size - l1Size;
        while (diff != 0) {
            ptr2 = ptr2.next;
            diff--;
        }
    }

    EqualLinkedListSum(ptr1, ptr2, output, carry);
    if (carry.val != 0 && l1Size == l2Size) {
        var node = new LLNode(carry.val);
        node.next = output.list;
        output.list = node;
    }


    else {
        var ptr = l1Size > l2Size ? node1 : node2;
        var diff = Math.abs(l2Size - l1Size);
        var partList = { list: null }
        AddRemaining(ptr, diff, carry, partList);
        ptr = partList.list;
        while (ptr.next != null) {
            ptr = ptr.next;
        }
        ptr.next = output.list;
        output.list = partList.list;
    }

    return output.list;
}

function AddRemaining(node, diff, carry, root) {
    if (diff == 0) return;
    AddRemaining(node.next, diff - 1, carry);

    carry.val = Math.floor((node.key + carry.val) / 10);
    val = (node.key + carry.val) % 10;
    var newNode = new LLNode(val);
    if (root.list == null) {
        root.list = newNode;
    } else {
        newNode.next = root.list;
        root.list = newNode;
    }
}

function LLLength(root) {
    var length = 0;
    ptr = root;
    while (ptr != null) {
        length++;
        ptr = ptr.next;
    }
    return length;
}

function LLNode(key) {
    this.next = null;
    this.key = key == undefined ? null : key;
}
function EqualLinkedListSum(node1, node2, totalSum, carry) {

    if (node1 == null && node2 == null) return;
    EqualLinkedListSum(node1 != null ? node1.next : node1, node2 != null ? node2.next : node2, totalSum, carry);

    if (node1 == null || node2 == null) return;
    sum = node1.key + node2.key + carry.val;
    var newNode = new LLNode(sum % 10);
    if (totalSum.list == null) {
        totalSum.list = newNode;
    }
    else {
        newNode.next = totalSum.list;
        totalSum.list = newNode;
    }
    carry.val = Math.floor(sum / 10);
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

var root1 = new LLNode(5);
var l2 = new LLNode(6);
var l3 = new LLNode(3);
var l9 = new LLNode(1);
root1.next = l2; l2.next = l3; l3.next = l9;

var root2 = new LLNode(8);
var l4 = new LLNode(4);
var l5 = new LLNode(2);
root2.next = l4; l4.next = l5;

var res = LinkedListSum(root1, root2);
console.log(PrintLL(res));
