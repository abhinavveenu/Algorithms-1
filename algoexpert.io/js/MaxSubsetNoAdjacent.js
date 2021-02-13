function maxsubset_noadcacent(arr) {
    if (arr.length == 0) return 0;
    if (arr.length == 1) return arr[0];
    var dp = [arr[0], Math.max(arr[0], arr[1])];

    for (var i = 2; i < arr.length; i++) {
        dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1]);
    }

    return dp[arr.length - 1];
}

console.log(maxsubset_noadcacent([75, 105, 120, 75, 90, 135]))