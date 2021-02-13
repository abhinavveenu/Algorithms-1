function minCoinChangeRecursive(sum, coins) {
    if (sum == 0) return 0;
    if (sum < 0) return 99999;
    var min = 99999;
    for (var i = 0; i < coins.length; i++) {
        var curr = minCoinChangeRecursive(sum - coins[i], coins) + 1;
        if (curr < min) min = curr;
    }

    return min;
}

// console.log(minCoinChangeRecursive(7, [1, 5, 10]));

function minCoinChangeDP(sum, coins) {
    var dpArr = [0];
    for (var i = 1; i <= sum; i++) {
        var min = 99999;
        for (var j = 0; j < coins.length; j++) {
            var curr = (i - coins[j]) >= 0 ? (dpArr[i - coins[j]] + 1) : 99999;
            if (curr < min) min = curr;
        }
        dpArr[i] = min;
    }

    return dpArr[sum];
}

// console.log(minCoinChangeDP(7, [1, 5, 10]));