function LCS(X, Y) {
    var dpArr = [];

    var m = X.length;
    var n = Y.length;
    for (var i = 0; i <= m; i++) {
        dpArr[i] = [];
        dpArr[i][0] = 0;
    }

    for (var i = 0; i <= n; i++) {
        dpArr[0][i] = 0;
    }

    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (X[i - 1] == Y[j - 1]) dpArr[i][j] = 1 + dpArr[i - 1][j - 1];
            else dpArr[i][j] = Math.max(
                dpArr[i - 1][j], dpArr[i][j - 1]
            );
        }
    }


    var lcs = "";
    var i = m; var j = n;

    while (i > 0 && j > 0) {
        if (X[i - 1] == Y[j - 1]) {
            lcs += X[i - 1];
            i--; j--;
        }
        else if (dpArr[i][j] == dpArr[i - 1][j]) { i--; }
        else j--;
    }

    return [lcs.split('').reverse().join(''), dpArr[m][n]];

}

// var res = LCS('ZXVVYZW', 'XKYKZPW');

// console.log(res);