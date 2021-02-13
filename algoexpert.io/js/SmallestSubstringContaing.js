function smallSubstringContaining(str, pattern) {
    var patternHash = {};

    for (var i = 0; i < pattern.length; i++) {
        if (patternHash[pattern[i]]) patternHash[pattern[i]]++;
        else patternHash[pattern[i]] = 1;
    }
    var filteredArr = [];

    for (var i = 0; i < str.length; i++) {
        if (patternHash[str[i]]) filteredArr.push({ 'char': str[i], 'index': i });
    }
    var j = 0;
    var checkHash = {};
    var output = "";
    var length = 99999;
    var patternHashClone = Object.assign({}, patternHash);
    for (var i = 0; i < filteredArr.length; i++) {

        if (patternHashClone[filteredArr[i]['char']] == 1) {
            delete patternHashClone[filteredArr[i]['char']];
        }
        else if (patternHashClone[filteredArr[i]['char']]) {
            patternHashClone[filteredArr[i]['char']]--;
        }

        if (checkHash[filteredArr[i]['char']]) {
            checkHash[filteredArr[i]['char']]++;
        }
        else {
            checkHash[filteredArr[i]['char']] = 1;
        }

        if (Object.keys(patternHashClone).length == 0) {
            while (j < i) {
                if (!patternHash[filteredArr[j]['char']] || (checkHash[filteredArr[j]['char']] && checkHash[filteredArr[j]['char']] > patternHash[filteredArr[j]['char']])) {
                    checkHash[filteredArr[j]['char']]--;
                    j++;
                }
                else break;
            }
            var currWord = str.substr(filteredArr[j].index, filteredArr[i].index - filteredArr[j].index + 1);
            if (currWord.length < length) {
                length = currWord.length;
                output = currWord;
            }
        }
    }

    return output;
}

console.log(smallSubstringContaining('ABDCDDDDDEEAFFBC', 'ABC'));