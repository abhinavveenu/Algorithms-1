function LongestPalindromiSubstring(str) {
    var dp = [];
    for (var i = 0; i < str.length; i++) {
        dp[i] = [];
    }

    var longest = 1;

    for (var j = 0; j < str.length; j++) {
        for (var i = 0; i < str.length; i++) {
            if (i == j) dp[i][j] = true;
            else if (i > j) dp[i][j] = true;
            else {
                if (dp[i + 1][j - 1] && str[i] == str[j]) {
                    dp[i][j] = true;
                    if (j - i + 1 > longest) longest = j - i + 1;
                }
                else dp[i][j] = false;
            }
        }
    }

    return longest;
}

// console.log(LongestPalindromiSubstring('forgeeksskeegfor'));