## Maximum Product Subarray

[Question](https://leetcode.com/problems/maximum-product-subarray/description/)

```
var maxProduct = function(nums) {
    let prevMin = nums[0];
    let prevMax = nums[0];
    let result = nums[0];

    for(let i = 1; i < nums.length; i++) {
        let curMin, curMax;

        curMax = Math.max(nums[i], prevMax * nums[i], prevMin * nums[i]);
        curMin = Math.min(nums[i], prevMin * nums[i], prevMax * nums[i]);

        prevMax = curMax;
        prevMin = curMin;

        result = Math.max(curMax, result);
    }

    return result;
};
```