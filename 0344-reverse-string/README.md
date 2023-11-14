## Reverse String

[Question](https://leetcode.com/problems/reverse-string)

### Approach



```
var reverseString = function(s) {
    var left = 0;
    var right = s.length - 1;
    var tempLeft, tempRight;

    while(left < right) {
        tempLeft = s[left];
        tempRight = s[right]
        s[left] = tempRight;
        s[right] = tempLeft;

        left++;
        right--;
    }

    return s;
};
```
