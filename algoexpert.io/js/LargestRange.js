function largestRange(arr) {
    if (arr.length == 0) return 0;
    arr.sort(function (x, y) { return x - y; });
    var res = [0, 0];
    var currStart = 0;
    var length = 0;
    var curLength = 0
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] == 1) {
            curLength++;
            if (curLength > length) {
                length = curLength;
                res = [currStart, arr[i + 1]];
            }

        }
        else {
            curLength = 0;
            currStart = arr[i + 1];
        }
    }

    return res;
}

function largestRangeImprovised(arr) {
    var hash = {};
    var maxLength = 0;
    var range = [];

    for (var i = 0; i < arr.length; i++) {
        hash[arr[i]] = true;
    }

    for (var i = 0; i < arr.length; i++) {
        var currLength = 0;
        if (hash[arr[i]]) {
            currLength++;
            hash[arr[i]] = false;
        }
        var left = arr[i] - 1;
        var right = arr[i] + 1;

        while (hash[left]) {
            currLength++;
            hash[left] = false;
            left = left - 1;
        }

        while (hash[right]) {
            currLength++;
            hash[right] = false;
            right = right + 1;
        }

        if (currLength > maxLength) {
            maxLength = currLength;
            range = [left + 1, right - 1]
        }
    }

    return range;
}


console.log(largestRangeImprovised([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]));