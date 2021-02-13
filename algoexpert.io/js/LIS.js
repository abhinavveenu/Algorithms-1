function LIS(arr) {
    var dpArr = [arr[0]];
    var seq = [];
    var INF = 99999;
    var befElement = [-1];
    for (var i = 1; i < arr.length; i++) {
        var max = -INF;
        var maxElementIndex = -1;
        for (var k = 0; k < i; k++) {
            if (arr[k] < arr[i] && dpArr[k] > max) {
                max = dpArr[k];
                maxElementIndex = k;
            }
        }
        befElement[i] = maxElementIndex;
        if (max == -INF) dpArr[i] = 0;
        else dpArr[i] = max + arr[i];
    }

    var maxlength = Math.max(...dpArr);
    var index = dpArr.indexOf(maxlength);

    while (index != -1) {
        seq.push(arr[index]);
        index = befElement[index];
    }
    return [maxlength, [...seq.reverse()]]
}

var res = LIS([10, 70, 20, 30, 50, 11, 30]);

console.log(res);