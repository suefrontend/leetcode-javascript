## 1. Two Sum

[https://leetcode.com/problems/two-sum/]

In this question, I need to return indices of two integers in an array which can add up to target number. For example, if an array is [2,7,11,15] and target is 9, I need to return [0] and [1] because 2 + 7 = 9.

## Solution

1. First, create an empty object which will store data. Key will be the actual integer of an array, and value will be its index.

```
var twoSum = function(nums, target) {

  var obj = {};

```

2. Iterate through the array.

```
  // nums = [2,7,11,15]
  for (var i = 0; i < nums.length; i++) {
```

3.

Calculate the difference of each number and target number. This will be the **key** of the object.

```
  var complement = target - nums[index];
```

Pair up the key with the index.

If you find a key which is the same number as complement, that is the number we want the index of. You can use **in operator** to check it.

```
  if (complement in obj) {
```

You're going to return two indices.

First one is the **value** of the key which is the same number as complement. Second is the current index of the array, because as soon as you find the second one, the iteration is over.

Since you need to return two indeces, use [] so that the indeces will be stored in array.

```
    return [obj[complement], i]
  }
```

Otherwise, keep adding a number (key) and its index (value) to the object.

```
  else {
    obj[nums[i]] = i;
  }
```

Return an empty array in case none of the condition met.

```
  return [];
}
```

## Whole Code

```
var twoSum = function(nums, target) {

  var obj = {};

  for (var i = 0; i < nums.length; i++) {

    var complement = target - nums[i];

    if(complement in obj) {
      return [obj[complement], i]
    } else {
      obj[nums[i]] = i;
    }

  }
  return [];
}
```
