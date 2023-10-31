## Valid Parentheses

[Question](https://leetcode.com/problems/valid-parentheses)

### Approach

```
var isValid = function(s) {
    var stack = [];
    var pairs = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    for (var i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else {
            if (stack.pop() !== pairs[s[i]]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
```
