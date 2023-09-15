## Longest Common Prefix

[Question](https://leetcode.com/problems/longest-common-prefix/)

### How to solve

1. Create a variable prefix to store the common prefix.
2. Implement two loops: one for iterating through the characters of the first element and another for iterating through the other elements in the array.
3. If the characters at the current position are the same across all elements, append the character to the prefix.
4. If the characters no longer match, return the prefix.

### Whole code

```
var longestCommonPrefix = function(strs) {
    var prefix = "";

    if (strs.length === 0 || strs === null) return prefix;
    if (strs.length === 1) {return strs[0]}

    for(var i = 0; i < strs[0].length; i++) {
        for(var j = 1; j < strs.length; j++) {
            if(strs[0][i] !== strs[j][i]) {
                return prefix;
            }
        }
        prefix += strs[0][i];
    }

    return prefix;
};
```
