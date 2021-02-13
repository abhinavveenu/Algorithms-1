//Need to be done without taking any extra space: therefore no inbuilt methods like reverse can be used
//All the extra spaces before the start of the line, after end of the line, 
//multiple spaces b/w words must not be there in the output

function reverseWords(str) {
    var arr = str.split('');
    var i = 0;
    var j = arr.length - 1;
    while (j > i) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++; j--;
    }

    i = 0; k = 0;

    while (k < arr.length) {
        while (arr[k] == ' ') k++;
        if (k >= arr.length) break;
        var j = k;
        while (arr[j] != ' ')
            j++;
        var word = arr.slice(k, j);

        cleanWord(arr, k, j - 1);
        l = word.length - 1;
        while (l >= 0) {
            arr[i] = word[l];
            i++; l--;
        }
        i += 1;
        k = j;
    }

    return arr.slice(0, i).join('');

}

function cleanWord(chars, i, j) {
    for (var k = i; k <= j; k++) chars[k] = ' ';
}


console.log(reverseWords("   My name is abhinav   "));