function IsPalindrome(str) {
    var j = str.length - 1;
    var i = 0;
    while (j > i) {
        if (str[i] != str[j]) return false;
        i++;
        j--;
    }
    return true;
}

console.log(IsPalindrome("aaabbaaa"));