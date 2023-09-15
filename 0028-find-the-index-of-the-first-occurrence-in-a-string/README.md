## Find the Index of the First Occurrence in a String

[Question](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/) (Old title: Implement strStr())

### How to solve

1. The loop will only start if the length of the haystack is greater than or equal to the length of the needle.
2. Create a variable `j` to store the occurrences of the same character.
3. Implement two nested loops: one for iterating through the haystack and another for iterating through the needle.
4. Use `i + j` to adjust the index for comparison.
5. Compare each character in both the needle and the haystack.
6. If a different character is found, the loop is exited.
7. To ensure that the loop has iterated the same number of times as there are characters in the needle, check if `j === needle.length`. This is possible because `j` is incremented only when both characters match.
8. Return `i` as the index because it represents the starting position in the haystack where the complete needle is first found.

### Whole code

```
var strStr = function(haystack, needle) {

    if(haystack.length >= needle.length) {
        var j;

        for(var i = 0; i < haystack.length; i++) {
            for(j = 0; j < needle.length; j++) {
                if(needle[j] !== haystack[i + j]) {
                    break;
                }
            }
            if(j === needle.length) return i;
        }
    }

    return -1;
};
```
