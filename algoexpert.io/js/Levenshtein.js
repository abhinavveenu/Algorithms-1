function levenshtein(strA, strB) {
    return levenshteinInternal(strA, strB, strA.length, strB.length);
}

function levenshteinInternal(strA, strB, m, n) {
    if (m == 0 && n == 0) return 0;
    if (m == 0) return n;
    if (n == 0) return m;
    if (strA[m - 1] == strB[n - 1]) return levenshteinInternal(strA, strB, m - 1, n - 1);

    return 1 + Math.min(
        levenshteinInternal(strA, strB, m, n - 1),
        levenshteinInternal(strA, strB, m - 1, n),
        levenshteinInternal(strA, strB, m - 1, n - 1)
    )
}

// console.log(levenshtein('abc', 'yabd'));

function levenshteinDP(strA, strB) {
    var dpArr = [];
    var m = strA.length; var n = strB.length;

    for (var i = 0; i <= m; i++) {
        dpArr[i] = [];
        dpArr[i][0] = i;
    }

    for (var i = 0; i <= n; i++) {
        dpArr[0][i] = i;
    }

    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (strA[i - 1] == strB[j - 1])
                dpArr[i][j] = dpArr[i - 1][j - 1];
            else {
                dpArr[i][j] = 1 + Math.min(
                    dpArr[i - 1][j - 1],
                    dpArr[i - 1][j],
                    dpArr[i][j - 1]
                )
            }
        }
    }

    return dpArr[m][n];

}

console.log(levenshteinDP('abc', 'yabd'));