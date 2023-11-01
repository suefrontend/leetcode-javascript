## Valid Parentheses

[Question](https://leetcode.com/problems/valid-parentheses)

### Approach

This problem is efficiently solved using a stack data structure.

1. **Initialize an empty stack**<br>
Begin by creating an empty stack. I'm going to use this stack to push and pop parentheses as I process the input string.
2. **Define pairs**<br>
Create a hash table to pair up the corresponding opening and closing parentheses.
3. **Iterate over the input string**<br>
Use a loop to traverse the characters in the input string.
4. **Handle opening parentheses**<br>
If you encounter an opening bracket (i.e., '(', '{', or '['), push it onto the stack.
5. **Check for matching pairs**<br>
If the current character in the input string is a closing bracket (')', '}', or ']'), compare it to the element currently at the top of the stack. If they don't match, return `false` because it's not a valid pair.
6. **Final valification**<br>
After processing the intire input string, if the stack is empty, it indicates that all the brackets in the string have matching pair. In this case, return true.

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
