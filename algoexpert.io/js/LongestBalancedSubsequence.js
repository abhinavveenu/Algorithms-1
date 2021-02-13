function longestBalancedSubsequence(str) {
    var length = 0;
    var stack = [str[0]];
    var i = 1;
    while (i < str.length) {
        if (str[i] == ')' && stack[stack.length - 1] == '(') {
            stack.pop();
            length += 2;
        } else stack.push(str[i]);
        i++;
    }
    return length;
}

// console.log(longestBalancedSubsequence('()())'));


// Method 2:
// Without any extra space

function longestBalancedSubsequence2(str) {
    var invalidOpen = 0;
    var invalidClose = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] == '(') invalidOpen++;
        else {
            invalidClose++;
            if (invalidOpen > 0) { invalidClose--; invalidOpen--; }
        }
    }

    return str.length - (invalidClose + invalidOpen);
}


console.log(longestBalancedSubsequence2('()(((((()'));
