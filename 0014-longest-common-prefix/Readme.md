## Longest Common Prefix

[Question](https://leetcode.com/problems/longest-common-prefix/)[<img width="30" src="https://camo.githubusercontent.com/cb2e82a44e4498bfb92d92cfdce6cdada6176bd4a3b6c4e8c5f4d8c47e3488f6/68747470733a2f2f692e706f7374696d672e63632f5943443642507a632f65787465726e616c2d6c696e6b2d69636f6e2d3135323834362e706e67" />](https://leetcode.com/problems/longest-common-prefix/)

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
