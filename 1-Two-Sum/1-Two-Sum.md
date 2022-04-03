## 1. Two Sum

(https://leetcode.com/problems/two-sum/)[https://leetcode.com/problems/two-sum/]

In this question, I need to return indices of two integers in an array which can add up to target number. For example, if an array is [2,7,11,15] and target is 9, I need to return [0] and [1] because 2 + 7 = 9.

## Solution

1. To solve this problem, I'm going to use Map. Map is an object which holds key and value. First, create an empty Map which will store data.

```
var twoSum = function(nums, target) {

  var obj = new Map();

```

2. Iterate through the array.

```
  // nums = [2,7,11,15]
  for (var i = 0; i < nums.length; i++) {
```

3.

Calculate the difference of each number and target number. This will be the **key** of the Map.

```
  var complement = target - nums[index];
```

Pair up the key with the index.

If you find the same number as complement, it's a match. That is the number we want the index of. You can search if the number exists in Map by `obj.has()`, which will return true if the key exists.

```
  if (obj.has(complement)) {
```

You're going to return two indices.

First one is the **value** of You can use `obj.get()`, which will return the value of a key.
Second, the current index because as soon as the second index is found, the search is over.

Since you need to return two indeces, use [] so that the indeces will be stored in array.

```
    return [obj.get(nums[i]), i]
  }
```

Otherwise, keep adding a number (key) and its index (value) to Map object.

```
  else {
    obj.set(complement, i);
  }
```

Map will look like this:

```
// num = [2,7,11,15], target = 9

{
  7: 0, // complement: index
  2: 1,
  2: 2,
  4: 6
}

```

## Whole Code

```
var twoSum = function(nums, target) {

  var obj = new Map();

  var complement = target - nums[index];

  if (obj.has(complement)) {
    return [obj.get(nums[i]), i]
  }  else {
    obj.set(complement, i);
  }
}
```
