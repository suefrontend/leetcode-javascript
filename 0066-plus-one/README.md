## Plus One

[Question](https://leetcode.com/problems/plus-one)

### Approach

1. **Right-to-Left Traversal**<br>
Begin by iterating through the digits from right to left, because this is how we add one to a number.
2. **Handling non-9s**<br>
If the rightmost digit is not equal to 9, simply add 1 to that digit, and the operation is complete. Return the digits array immediately.
3. **Handling 9s**<br>
If the rightmost digit is 9, change it to 0, and continue proceeding towards the left until a digit that is not 9 is found.
4. **Add 1**<br>
When you reach a digit that is not 9, add 1 to it, and the operation is complete.

```
var plusOne = function(digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        if(digits[i] !== 9) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
};
```
