## Remove Duclicates from Sorted Array

[Question](https://leetcode.com/problems/remove-duplicates-from-sorted-array)

### Approach

1.　 
2.　 
3.

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
