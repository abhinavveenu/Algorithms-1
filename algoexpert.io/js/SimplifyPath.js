function simplifyUnixPath(str){
    var arr = str.split('/');

    var stack = [];

    for(var i=0;i<arr.length;i++){
        if(arr[i] == '..') stack.pop();
        else if(arr[i]!='.' && arr[i]!='') stack.push(arr[i]);
    }

    return "/" + stack.join('/');
}

console.log(simplifyUnixPath("/a/./b/../../c/"));
