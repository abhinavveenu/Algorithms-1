function Knapsack(S, W) {
    var dpArr = [];

    for (var i = 0; i <= S; i++) {
        dpArr[i] = [];
        dpArr[i][0] = 0;
    }

    for (var i = 0; i <= W.length; i++) {
        dpArr[0][i] = 0;
    }

    for (var i = 1; i <= S; i++) {
        for (var j = 1; j <= W.length; j++) {
            dpArr[i][j] = Math.max((i - W[j - 1][0] >= 0) ? dpArr[i - W[j - 1][0]][j] + W[j - 1][0] : 0, dpArr[i][j - 1]);
        }
    }

    return dpArr[S][W.length];
}

var res = Knapsack(10, [[1, 2], [4, 3], [5, 6], [6, 7]]);
console.log(res);