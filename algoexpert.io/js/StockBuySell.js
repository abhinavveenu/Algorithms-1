function StockBuySell(price, k) {
    var profits = [];

    i = 0;
    var n = price.length;
    while (i < n - 1) {
        while ((i < n - 1) && (price[i + 1] <= price[i]))
            i++;
        if (i == n - 1)
            break;

        var buy = i++;

        while ((i < n) && (price[i] >= price[i - 1]))
            i++;

        // Store the index of maxima
        var sell = i - 1;

        profits.push(price[sell] - price[buy]);
    }

    profits.sort((x, y) => { return y - x; });

    return profits.slice(0, k).reduce((x, y) => x + y);
}

var res = StockBuySell([5, 11, 3, 50, 60, 90], 2);

// console.log(res);