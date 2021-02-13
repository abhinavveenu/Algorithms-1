function IsPalindrome(str) {
    if (str == "") return true;
    var i = 0;
    var j = str.length - 1;

    while (j > i) {
        if (str[i] != str[j]) return false;
        i++; j--;
    }

    return true;
}

function MinimumCutsPalidrome(str) {
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
                if (IsPalindrome(word)) dpArr[i][j] = 0;
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

// console.log(MinimumCutsPalidrome('noonabbad'));