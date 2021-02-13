function balancedBrackets(str) {
    var stack = [];

    for (var i = 0; i < str.length; i++) {
        if (stack.length > 0) {
            var stackTop = stack[stack.length - 1];
            if ((str[i] == ']' && stackTop == '[') || (str[i] == '}' && stackTop == '{') || (str[i] == ')' && stackTop == '(')
            ) {
                stack.pop();
            }
            else stack.push(str[i]);
        }
        else stack.push(str[i]);
    }

    if(stack.length > 0) return false;
    return true;
}

console.log(balancedBrackets('([])(){}(())()()'));
console.log(balancedBrackets('([])(){}(())(()'));