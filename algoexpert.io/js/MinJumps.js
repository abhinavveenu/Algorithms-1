function MinJumpsRecursive(arr) {
    return MinJumpsRecursiveInternal(arr, arr.length - 1);
}

function MinJumpsRecursiveInternal(arr, n) {
    var INF = 999999
    if (n == 0) return 0;
    if (arr[n] < 0) return INF;

    var min = INF;

    for (var k = n - 1; k >= 0; k--) {
        if (arr[k] + k >= n) {
            var res = MinJumpsRecursiveInternal(arr, k);
            if (res < min) min = res;
        }
    }

    return 1 + min;
}


// var arr = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3];
// var res = MinJumpsRecursive(arr, arr.length);
// console.log(res);

function MinJumpsDP(arr) {
    var dpArr = [0];
    var path = [-1];
    var minPath = [];
    var INF = 99999;
    for (var i = 1; i < arr.length; i++) {
        var min = INF;
        var pathIndex = -1;
        for (var k = i - 1; k >= 0; k--) {
            if (arr[k] + k >= i) {
                if (dpArr[k] < min) min = dpArr[k];
                path[i] = k;
            }
        }
        dpArr[i] = min + 1;
    }

    var i = arr.length - 1;

    while (i > 0) {
        minPath.push(arr[i]);
        i = path[i];
    }

    return [dpArr[dpArr.length - 1], minPath.reverse()];
}

// var arr = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3];
// var res = MinJumpsDP(arr);
// console.log(res);

function MinJumpsLinear(arr) {
    var jumps = 0;
    var i = 0;
    while (i < arr.length) {
        var max = -9999;
        var nextIndex = -1;
        for (var k = i + 1; k <= i + arr[i]; k++) {
            var res = k + arr[k];
            if (res > max) {
                max = res;
                nextIndex = k;
            }
        }
        i = k;
        jumps++;
    }
    return jumps;
}

var arr = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3];
var res = MinJumpsLinear(arr);
console.log(res);