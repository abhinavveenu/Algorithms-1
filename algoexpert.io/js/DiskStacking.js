function DiskStacking(arr) {
    var dpArr = [arr[0][2]];
    var stackDisks = [-1];
    var maxStack = [];

    for (var i = 1; i < arr.length; i++) {
        var max = -9999;
        var index = -1;
        for (var k = 0; k < i; k++) {
            if (arr[k][0] < arr[i][0] && arr[k][1] < arr[i][1] && arr[k][2] < arr[i][2]) {
                if (dpArr[k] > max) {
                    max = dpArr[k];
                    index = k;
                }
            }
        }
        stackDisks.push(index);
        if (max == -9999) dpArr[i] = 0;
        else
            dpArr[i] = max + arr[i][2];
    }

    
    var i = stackDisks.length - 1;
    while (i >= 0) {
        maxStack.push(arr[i]);
        i = stackDisks[i];
    }

    return [Math.max(...dpArr), maxStack];
}

var res = DiskStacking([[2, 1, 2], [3, 2, 3], [2, 2, 8], [2, 3, 4], [1, 3, 1], [4, 4, 5]]);
console.log(res);