## Remove Duclicates from Sorted Array

[Question](https://leetcode.com/problems/remove-duplicates-from-sorted-array)

### Approach

I'll utilize the two-pointer method to efficiently remove duplicates from a sorted array.

1. First, set a variable `i` to 0. This will keep track of the index of unique numbers.
2. Create a for loop to iterate through the array. Set loop condition to `j < nums.length` so that it covers the entire array but doesn't exceed its bounds.
3. Create a variable `j`. This will be used to compare two numbers and potentially removes duplicates.
4. If the numbers at positions `nums[i]` and `nums[j]` are **not the same**, replace `nums[i]` with `nums[j]`. This is done to overwrite the duplicate with the next unique number.
5. When `nums[i]` and `nums[j]` are the same, `i` remains the position. Only `j` advances to the next position in the array for comparison.
6. After checking all numbers in the array, return `i + 1`. This is because i represents the index of the last unique element, and adding 1 accounts for the zero-based index.

```
var removeDuplicates = function(nums) {
    var i = 0;

    for (var j = 1; j <= nums.length; j++) {
        if(nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
};
```
