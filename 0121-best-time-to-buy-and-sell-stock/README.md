## Plus One

[Question](https://leetcode.com/problems/best-time-to-buy-and-sell-stock)

### Approach

1. **Setting a temporary lowest price**
   Create a variable `min` to store the current lowest stock price, initializing it with the first element of the `stokcs` array.
2. **Initializing profit**
   Create a variable `profit` to temporary hold the largest profit.
3. **Find the lowest stock price**
   Check if `price[i]` is lower than the first stock price in the array; if so, update it as the new lowest price.
4. **Calculating profit**
   Calculate the profit by computing `prices[i] - min`. If a larger profit is found, update the `profit` variable.
5. **Final result**
   Finally, return the calculated profit.

```
var maxProfit = function(prices) {
    var min = prices[0];
    var profit = 0;

    for(var i = 1; i < prices.length; i++) {
        if(prices[i] < min) {
            min = prices[i];
        }
        if(prices[i] - min > profit) {
            profit = prices[i] - min;
        }
    }

    return profit;
};
```
