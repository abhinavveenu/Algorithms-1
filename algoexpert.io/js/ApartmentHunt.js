function ApartmentHunt(blocks, requirements) {
    var score = [{}];
    var INF = 999999;
    for (var i = 0; i < requirements.length; i++) {
        score[0][requirements[i]] = blocks[0][requirements[i]] ? 0 : INF;
    }

    for (var k = 1; k < blocks.length; k++) {
        score[k] = [];
        for (var i = 0; i < requirements.length; i++) {
            if (blocks[k][requirements[i]])
                score[k][requirements[i]] = 0;
            else if (score[k - 1][requirements[i]] == INF) score[k][requirements[i]] = INF;
            else score[k][requirements[i]] = score[k - 1][requirements[i]] + 1;
        }
    }

    var min = INF;
    var minIndex = score.length - 1;
    for (var k = score.length - 1; k >= 0; k--) {
        var currMax = -INF;
        for (var i = 0; i < requirements.length; i++) {
            score[k][requirements[i]] = Math.min(score[k][requirements[i]], k + 2 > score.length ? INF : score[k+1][requirements[i]] + 1);
            if (score[k][requirements[i]] > currMax) currMax = score[k][requirements[i]];
        }
        if (currMax < min) {
            min = currMax;
            minIndex = k;
        }
    }

    return minIndex;

}


var result = ApartmentHunt([{ "gym": false, "school": true, "store": false, }, { "gym": true, "school": false, "store": false, }, { "gym": true, "school": true, "store": false, }, { "gym": false, "school": true, "store": false, }, { "gym": false, "school": true, "store": true, },], ["gym", "school", "store"]);

console.log(result);