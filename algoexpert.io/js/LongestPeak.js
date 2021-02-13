function solution2(arr) {
    if (arr.length < 3) return 0;
    var elevation = 0;
    var declination = 0;
    var largestpeak = 0;
    var lastSign = 0;
    var change = arr[1] - arr[0];
    if (change >= 0) {
        elevation = 1;
        lastSign = 1;
    } else {
        declination = 1;
        lastSign = -1;
    }

    for (var i = 2; i < arr.length; i++) {
        var currSign = arr[i] - arr[i - 1] >= 0 ? 1 : -1;
        if (currSign == lastSign) {
            if (currSign == 1) elevation++;
            else declination++;
        }
        if (currSign != lastSign) {
            if (currSign == 1) {
                if (elevation != 0) {
                    var peak = elevation + declination;
                    if (peak > largestpeak) largestpeak = peak;
                }
                elevation = 2;
                declination = 0;
            }
            if (currSign == -1) {
                declination++;
            }
        }
        lastSign = currSign;
    }

    if (lastSign == -1 && elevation != 0) {
        var peak = elevation + declination;
        if (peak > largestpeak) largestpeak = peak;

    }

    return largestpeak;
}

console.log(solution2([1, 3, 1, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5]));