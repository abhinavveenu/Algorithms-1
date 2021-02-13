function groupAnagrams(arr) {
    var hashMap = {};

    for (var i = 0; i < arr.length; i++) {
        var sortedWord = arr[i].split('').sort().join('');
        if (hashMap[sortedWord]) hashMap[sortedWord].push(arr[i]);
        else hashMap[sortedWord] = [arr[i]];
    }

    var groupedAnagrams = [];
    for (var key in hashMap) {
        groupedAnagrams.push(hashMap[key]);
    }

    return groupedAnagrams;
}

console.log(groupAnagrams(['cat', 'dog', 'tac', 'god', 'act']));