function encrypt(str, key) {
    var aCharCode = 'a'.charCodeAt(0);
    var res = "";

    for (var i = 0; i < str.length; i++) {
        res += String.fromCharCode(((str[i].charCodeAt(0) - aCharCode + key) % 26) + 'a'.charCodeAt(0));
    }

    return res;
}

console.log(encrypt('xyz', 2));