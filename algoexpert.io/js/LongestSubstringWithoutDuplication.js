function longestPalindromiSubstring(str) {
    var hashmap = {};
    var longest = 0;
    var startIndex = 0;
    var longestWord = "";
    var currentLongest = 0;
    for (var i = 0; i < str.length; i++) {
        if (!hashmap[str[i]]) {
            hashmap[str[i]] = i;
            currentLongest++;
            if (currentLongest > longest) {
                longest = currentLongest;
                longestWord = str.substr(startIndex, i - startIndex + 1)
            }
        }
        else {
            startIndex = hashmap[str[i]] + 1;
            currentLongest = i - hashmap[str[i]];
            hashmap[str[i]] = i;
        }
    }

    return longestWord;
}

console.log(longestPalindromiSubstring('clementisacap'));