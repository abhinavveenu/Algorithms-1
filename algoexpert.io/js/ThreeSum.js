function ThreeSum(arr, sum) {
    arr.sort(function (x, y) { return x > y; });
    var triplets = [];
    for (var i = 0; i < arr.length; i++) {
        j = i + 1;
        k = arr.length - 1;
        while (j < k) {
            if (arr[i] + arr[j] + arr[k] == sum) {
                triplet = [arr[i], arr[j], arr[k]];
                triplets.push(triplet);
                k--;
            }
            if (arr[i] + arr[j] + arr[k] > sum) {
                k--;
            }
            else j++;
        }
    }

    return triplets;
}

// console.log(ThreeSum([12, 3, 1, 2, -6, 5, -8, 6], 0));

function SmallestDifference(arrA, arrB) {
    arrA.sort(function (x, y) { return x > y; });
    arrB.sort(function (x, y) { return x > y; });

    var diffArray = [];
    var diff = 999999;
    i = 0;
    j = 0;

    while (i < arrA.length && j < arrB.length) {
        var currDiff = Math.abs(arrA[i] - arrB[j]);
        if (currDiff < diff) {
            diff = currDiff;
            diffArray = [arrA[i], arrB[j]];
        }
        var a = i + 1 < arrA.length ? Math.abs(arrA[i + 1] - arrB[j]) : 999999;
        var b = j + 1 < arrB.length ? Math.abs(arrA[i] - arrB[j + 1]) : 999999;
        var c = i + 1 < arrA.length || j + 1 < arrB.length ? Math.abs(arrA[i + 1] - arrB[j + 1]) : 999999;

        if (a < b && a < c && a < diff) { i++; }
        else if (b < a && b < c && b < diff) { j++; }
        else if (c < b && c < a && c < diff) { i++; j++; }
        else {
            
        }
    }

}