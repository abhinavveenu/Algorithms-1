function PINumbersRecursive(str, list) {
    return PINumnersRecursiveInternal(str, list, 0, str.length - 1);
}

function PINumnersRecursiveInternal(str, list, i, j) {
    if (j < i) return INF;
    var word = str.substr(i, j - i + 1);
    if (list.indexOf(word) != -1) return 0;
    var INF = 99999;
    var min = INF;
    for (var k = i + 1; k <= j; k++) {
        var res =
            PINumnersRecursiveInternal(str, list, i, k - 1) +
            PINumnersRecursiveInternal(str, list, k, j);
        if (res < min)
            min = res;
    }

    return min + 1;
}

// console.log(PINumbersRecursive("3141592653589793238462643383279", ["314159265358979323846","26433","8","3279","314159265","35897932384626433832","79"]));

// console.log(PINumbersRecursive("ABCDEFG", ["ABC", "DE", "FG"]))

function PINumbersDP(str, list) {
    var dpArr = [];
    var INF = 99999;
    for (var i = 0; i < str.length; i++) {
        dpArr[i] = [];
    }

    for (var i = str.length - 1; i >= 0; i--) {
        for (var j = 0; j < str.length; j++) {
            if (j < i) dpArr[i][j] = INF;
            else {
                var word = str.substr(i, j - i + 1);
                if (list.indexOf(word) != -1) dpArr[i][j] = 0;
                else {
                    var min = INF;
                    for (var k = i + 1; k <= j; k++) {
                        var res = dpArr[i][k - 1] + dpArr[k][j];
                        if (res < min)
                            min = res;
                    }
                    dpArr[i][j] = 1 + min;
                }
            }
        }
    }

    return dpArr[0][str.length - 1];
}

console.log(PINumbersDP("3141592653589793238462643383279", ["314159265358979323846","26433","8","3279","314159265","35897932384626433832","79"]));
