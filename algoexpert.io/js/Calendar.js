function CalendarMatching(meetingsA, meetingsB, timingsA, timingsB) {
    var A = []; var B = [];

    if (meetingsA[0][0] > timingsA[0]) {
        A.push([timingsA[0], meetingsA[0][0]]);
    }

    for (var i = 0; i < meetingsA.length - 1; i++) {
        if (meetingsA[i + 1][1] != meetingsA[i][1]) {
            A.push([meetingsA[i][1], meetingsA[i + 1][0]]);
        }
    }

    if (meetingsA[meetingsA.length - 1][1] < timingsA[1]) {
        A.push([meetingsA[meetingsA.length - 1][1], timingsA[1]]);
    }

    if (meetingsB[0][0] > timingsB[0]) {
        B.push([timingsB[0], meetingsB[0][0]]);
    }

    for (var i = 0; i < meetingsB.length - 1; i++) {
        if (meetingsB[i + 1][1] != meetingsB[i][1]) {
            B.push([meetingsB[i][1], meetingsB[i + 1][0]]);
        }
    }

    if (meetingsB[meetingsB.length - 1][1] < timingsB[1]) {
        B.push([meetingsB[meetingsB.length - 1][1], timingsB[1]]);
    }

    var resultSet = [];
    i = 0; j = 0;
    while (i < A.length && j < B.length) {
        var commonFreeTime = FindCommon(A[i], B[j]);
        if (commonFreeTime != null) {
            resultSet.push(commonFreeTime);
        }
        if (A[i][1] > B[j][1]) j++;
        else i++;
    }

    return resultSet;
}

function FindCommon(a, b) {

    if (a[0] < b[0] && a[1] < b[0]) return null;
    if (b[0] < a[0] && b[1] < a[0]) return null;
    if (a[0] > b[0] && a[1] < b[1]) return a;
    if (b[0] > a[0] && b[1] < a[1]) return b;


    if (a[0] > b[0] && a[0] < b[1]) {
        return [a[0], b[1]];
    }
    if (b[0] > a[0] && b[0] < a[1]) {
        return [b[0], a[1]];
    }

    return null;
}

var commonTime = CalendarMatching([[9, 10.5], [12, 13], [16, 18]],
    [[10, 11.5], [12.5, 14.5], [14.5, 15], [16, 17]], [9, 20], [10, 18.5]);

console.log(commonTime);