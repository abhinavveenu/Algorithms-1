function CoinChange(coins, sum) {
    var dpArr = [];
    var m = coins.length;
    for (var i = 0; i <= sum; i++) {
        dpArr[i] = [];
    }

    for (var i = 0; i <= sum; i++) {
        dpArr[i][0] = 0;
    }

    for (var i = 0; i <= m; i++) {
        dpArr[0][i] = 1
    }
    
    for (var i = 1; i <= sum; i++) {
        for (var j = 1; j <= m; j++) {
            dpArr[i][j] = (((i - coins[j - 1]) < 0) ? 0 : dpArr[i - coins[j - 1]][j]) + dpArr[i][j - 1];
        }
    }

    return dpArr[sum][m];

}

console.log(CoinChange([1, 2], 6));