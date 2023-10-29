## Palindrome Number

[Question](https://leetcode.com/problems/palindrome-number/)

### Approach
1. **Handling Negative Numbers**<br>
If the input number is negative, it can't be a palindrome, so return `false` immediately.
2. **Copy the original number**<br>
Create a variable `num` and set it equal to the input number. This is done to preserve the original number and avoid modification.
3. **Initialize the reversed number**<br>
Create a variable `reversed` and set it to 0. This variable will be used to build the reversed number.
4. **Reverse digit**<br>
Extract the rightmost digit of `num` using `(num % 10)` and add it to `reversed`. Then by performing `reversed * 10`, you shift the existing digits in `reversed` one place to the left, making room for the new digit right side of the input. This step accumulates the digits in reversed order and constructs the reversed number.
5. **Remove the rightmost digit from input**<br>
Update the input number by dividing it by 10 (using `Math.floor(num / 10)`). This step effectively remove the rightmost digit from the number.
6. **Compare reversed number and input**<br>
When `num !== 0` becomes 0, it means all the digits have been processed. At this point, compare `reversed` and the original input `x`. If they are same, return `true`; otherwise, return `false`.

```
var isPalindrome = function(x) {

    if (x < 0) return false;

    var num = x;
    var reversed = 0;
    
    while (num !== 0) {
        reversed = (reversed * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
  
    return reversed === x;
};
```
