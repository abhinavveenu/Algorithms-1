function SubarraySort(arr) {
    var lIndex = -1;
    var rIndex = -1;
    var change = true;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            lIndex = i;
            break;
        }
    }
    for (var i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > arr[i + 1]) {
            rIndex = i;
            break;
        }
    }

    if (rIndex == -1 && lIndex == -1) return [lIndex, rIndex];
    while (change) {
        change = false;
        var unsotedSubArray = arr.slice(lIndex, rIndex + 1);
        unsotedSubArray.sort(function (x, y) { return x - y; });

        for (var i = 0; i < lIndex; i++) {
            if (arr[i] > unsotedSubArray[0]) {
                lIndex = i;
                change = true;
                break;
            }
        }

        for (var i = arr.length - 1; i > rIndex; i--) {
            if (arr[i] < unsotedSubArray[unsotedSubArray.length - 1]) {
                rIndex = i;
                change = true;
                break;
            }
        }
    }

    return [lIndex, rIndex];
}

console.log(SubarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]));