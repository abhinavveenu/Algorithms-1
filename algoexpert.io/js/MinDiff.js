function solution(arrA, arrB) {
    arrA.sort(function (x, y) { return x - y });
    arrB.sort(function (x, y) { return x - y });

    var i = 0; var j = 0;
    var diff = Math.abs(arrA[0] - arrB[0]);
    var diffArr = [arrA[0], arrB[0]];
    while (i < arrA.length && j < arrB.length) {
        var a = Math.abs(arrA[i + 1] - arrB[j]);
        var b = Math.abs(arrA[i] - arrB[j + 1]);

        if (a < b) i++;
        else j++;

        var currDiff = Math.abs(arrA[i] - arrB[j]);

        if (currDiff < diff) {
            diff = currDiff;
            diffArr = [arrA[i], arrB[j]];
        }

        if (diff == 0) return diffArr;

    }

    return diffArr;
}

// console.log(solution([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));

