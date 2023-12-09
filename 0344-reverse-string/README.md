## Reverse String

[Question](https://leetcode.com/problems/reverse-string)

### Approach

1.
2.
3.

```
var reverseString = function(s) {
    var left = 0;
    var right = s.length - 1;
    var temp;

    while(left < right) {
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }

    return s;
};
```
