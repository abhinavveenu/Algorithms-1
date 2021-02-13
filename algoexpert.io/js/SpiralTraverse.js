function SpiralTraversal(arr) {
    var xEnd = arr.length;
    var yEnd = arr[0].length;
    var xStart = 0;
    var yStart = 0;

    while (xStart < arr.length && yStart < arr[0].length) {

        for (var y = yStart; y < yEnd; y++) {
            console.log(arr[xStart][y]);
        }

        for (var x = xStart + 1; x < xEnd; x++) {
            console.log(arr[x][yEnd - 1]);
        }

        for (var y = yEnd - 2; y >= yStart; y--) {
            console.log(arr[xEnd - 1][y]);
        }

        for (var x = xEnd - 2; x > xStart; x--) {
            console.log(arr[x][yStart]);
        }

        xStart++;
        yStart++;
        xEnd--;
        yEnd--;
    }
}

var arr =
    [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ]

SpiralTraversal(arr);