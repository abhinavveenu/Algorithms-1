function validIPAddress(IP) {
    if (!IP) return 'Neither';

    var v4 = IP.split('.');
    if (v4.length == 4) {
        for (var i = 0; i < v4.length; i++) {
            var part = parseInt(v4[i]);
            if (isNaN(part) || part > 255 || part < 0) return "Neither";
        }
        return "IPv4";
    }

    var ipv6Max = parseInt('ffff', 16);

    var v6 = IP.split(':');
    if (v6.length != 8) return "Neither";

    for (var i = 0; i < v6.length; i++) {
        var part = parseInt(v6[i], 16);
        if (isNaN(part) || part > ipv6Max || part < 0) return "Neither";
    }
    return "IPv6";

};

console.log(validIPAddress("1e1.4.5.6"));