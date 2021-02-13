function WaterTrap(arr) {
    var right = [];
    var left = [];

    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max > arr[i]) {
            left[i] = max;
        }
        if (arr[i] > max) max = arr[i];
    }

    max = arr[arr.length - 1];

    for (var i = arr.length - 2; i >= 0; i--) {
        if (max > arr[i]) {
            right[i] = max;
        }
        if (arr[i] > max) max = arr[i];
    }

    var water = 0;

    for (var i = 1; i < arr.length - 1; i++) {
        water += Math.min(left[i], right[i]) - arr[i];
    }

    return water;
}

// console.log(WaterTrap([3, 0, 2, 0, 4]));