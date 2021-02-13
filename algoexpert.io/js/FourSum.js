function FourSum(arr, sum) {
    var hashmap = {};
    var allPairs = []

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            var currTwoSum = arr[i] + arr[j];
            var targetSum = sum - currTwoSum;
            if (hashmap[targetSum] != undefined && IsDistinctFour(hashmap[targetSum].concat([i, j]))) {
                allPairs.push([arr[hashmap[targetSum][0]], arr[hashmap[targetSum][1]], arr[i], arr[j]]);
            }
            hashmap[[arr[i] + arr[j]]] = [i, j];
        }
    }
    return allPairs;
}

function IsDistinctFour(arr) {
    var hash = {};
    for (var i = 0; i < arr.length; i++) {
        if (hash[arr[i]]) return false;
        hash[arr[i]] = true;
    }
    return true;
}

console.log(FourSum([10, 2, 3, 4, 5, 9, 7, 8], 23));