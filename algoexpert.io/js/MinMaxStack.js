function Stack() {
    var items = [];
    var minMaxStack = [];

    this.push = function (item) {
        var lastminmax = minMaxStack.slice(minMaxStack.length - 1);
        var minmax = lastminmax.length > 0 ? lastminmax : { min: 99999, max: -99999 };
        items.push(item);
        if (item < lastminmax.max && item > lastminmax.min) return;
        if (item > minmax.max) minmax.max = item;
        if (item < minmax.min) minmax.min = item;
        minMaxStack.push(minmax);
    }

    this.pop = function () {
        if (items.length == 0) return null;
        var item = items.pop();

        if (item == minMaxStack[minMaxStack.length - 1].min || item == minMaxStack[minMaxStack.length - 1].max)
            minMaxStack.pop();
    }

    this.max = function () {
        return minMaxStack[minMaxStack.length - 1].max;
    }
}