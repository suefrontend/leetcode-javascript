## 3Sum

[Question](https://leetcode.com/problems/3sum/description/)

```
var threeSum = function(nums) {
    if (nums.length < 3) return [];

    nums.sort((a,b) => a - b);
    const result = [];

    // Fix left most number
    for (let i = 0; i <= nums.length - 2; i++) {
        if(i > 0 && nums[i] === nums[i-1]) continue;
        // set variables
        let left = i+1, right = nums.length - 1;
        while(left < right) {
            if (nums[i] + nums[left] + nums[right] === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                while(left < right && nums[left] === nums[left+1]) left++;
                while(left < right && nums[right] === nums[right+1]) right--;

                left++;
                right--;

            } else if(nums[i] + nums[left] + nums[right] < 0) {
                left++;
            } else if(nums[i] + nums[left] + nums[right] > 0) {
                right--;
            }
        }
    }
    return result;
};
```