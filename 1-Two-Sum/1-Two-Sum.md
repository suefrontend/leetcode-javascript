## Two Sum

```
var twoSum = function(nums, target) {

const previousValues = {};
//[2,7,11,15]
// {

// }
```

```
for(let i = 0; i < nums.length; i++) {
const currentNumber = nums[i];
const neededValue = target - currentNumber;

    // previousValues[target - currentNumber]
    const index2 = previousValues[neededValue];

    console.log("previousValues", previousValues)

    if(index2 != null) {
      return [index2, i]
    } else {
      previousValues[currentNumber] = i;
    }

}

return null;

};
```
