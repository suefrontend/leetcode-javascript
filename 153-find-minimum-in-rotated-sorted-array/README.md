## Find Minimum in Rotated Sorted Array

[Question](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/)

```
var findMin = function(nums) {
    let start = 0
    let end = nums.length - 1

    while(start < end) {
        let mid = Math.floor((start + end) / 2)
        // [2,3,4,5,6]
        if(nums[mid] > nums[end]) {
            // it's not rotated
            // that means target number is in somewhere in left to middle
            start = mid + 1;
        } else {
            // somewhere in right
            end = mid;
        }
    }

    return nums[start];
};
```