function MinRewards(arr) {
    var start = 0;
    output = [];
    totalRewards = 0;
    var signChange = arr[1] - arr[0] > 0 ? 1 : -1;
    for (var i = 1; i < arr.length - 1; i++) {
        var currentSign = arr[i + 1] - arr[i] > 0 ? 1 : -1;
        if (currentSign != signChange) {

            if (currentSign == 1) {
                var count = 1;
                for (var j = i; j >= start; j--) {
                    output[j] = count;
                    totalRewards += count;
                    count++;
                }
            }
            else {
                var count = start > 0 ? output[start - 1] + 1 : 1;
                for (var j = start; j <= i; j++) {
                    output[j] = count;
                    totalRewards += count;
                    count++;
                }
            }
            start = i + 1;
            signChange = currentSign;
        }
    }

    output[arr.length - 1] = output[arr.length - 1] > output[arr.length - 2] ? output[arr.length - 2] + 1 : 1;
    totalRewards += output[arr.length - 1];

    return { totalrewards: totalRewards, rewards: output };
}

console.log(MinRewards([8, 4, 2, 1, 3, 6, 7, 9, 5]));