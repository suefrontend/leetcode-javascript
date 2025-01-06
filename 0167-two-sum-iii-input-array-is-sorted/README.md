## Two Sum II - Input Array is Sorted 

[Question](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted)

```
var twoSum = function(numbers, target) {
    // set right pointer
    let left = 0;
    let right = numbers.length - 1;
    
    // start both from left and right
    while (numbers[left] + numbers[right] !== target) {
        if (numbers[left] + numbers[right] > target) {
            right--;
        } else {
            left++;
        }
    }
    // if the sum is greater tham target, that means right is too high
    // in that case, move right pointer to left

    // return index+1
    return [left+1, right+1];
};
```