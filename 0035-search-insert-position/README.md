## Search Insert Position

[Question](https://leetcode.com/problems/search-insert-position/)

### Approach

1. Set up two pointers to define the search range: `left` represents the starting point, and `right` represents the end point of the search.
2. Create a while loop to continue searching until the search range becomes empty.
3. To locate the target index, divide the array into halves by calculating the middle variable.
4. If the value at the middle index is greater than the `target`, it indicates that the `target` is located in the lower half of the array, from the initial start to the middle. Update the new end point to `middle - 1` to narrow down the search range to the left half.
5. If the value at the middle index is smaller than the `target`, it indicates that the `target` is positioned in the latter half of the array, from the middle to the end. Set the new start to `middle + 1` to restrict the search range to the right half.
6. If the middle value is the same as the `target`, return `middle`.
7. If the target is not found in the array, return left. This is because left represents the position where the target should be inserted while preserving the array's sorted order. It points to the first index where the array value is greater than or equal to the target after the loop.

### Whole code

```
var searchInsert = function(nums, target) {

    var left = 0;
    var right = nums.length - 1;

    while(left <= right) {

        var middle = Math.floor((left + right) / 2);

        if(nums[middle] > target) {
            right = middle - 1;
        } else if(nums[middle] < target) {
            left = middle + 1;
        } else {
            return middle
        };
    }
    return left;
};
```
