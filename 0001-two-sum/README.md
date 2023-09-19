## Two Sum

[Question](https://leetcode.com/problems/two-sum)

### Approach

1. Create an object named obj to store key-value pairs, where keys represent numbers from the input array, and values represent their corresponding indices.
2. Use a loop to iterate through the input array.
3. Calculate the complement of the current array value relative to the target number.
4. If the complement is not found in the `obj`, add the current number and its index as a key-value pair in `obj`.
5. If the complement is already in `obj`, it means you've found two numbers that add up to the target. Return the indices of both numbers, where one is obtained from `obj`, and the other is the current index `i`.

```
var twoSum = function(nums, target) {

    const obj = {};

    for(var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];

        if(diff in obj) {
            return [obj[diff], i];
        }
        obj[nums[i]] = i;
    }
};
```
