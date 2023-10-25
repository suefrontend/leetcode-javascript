## Remove Element

[Question](https://leetcode.com/problems/remove-element/)

### Approach

1. Initialize a variable `k` to keep track of non-duplicate numbers.
2. Use a for loop to iterate through the array.
3. Check if the current number is equal to the specified val.
4. If the current number is not equal to val, overwrite the value at index `k` with the current number and increment `k` by 1.
5. Return the value of `k`, which represents the count of non-duplicate numbers.

```
var removeElement = function(nums, val) {
    var k = 0;

    for(var i = 0; i <= nums.length; i++) {
        if(nums[k] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}
```
