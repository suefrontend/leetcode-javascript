## Find the Index of the First Occurrence in a String

[Question](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/)

### Overview

- Set two pointers - one for needle, one for haystack
- Loop through both haystack and needle


### Whole code
```
var strStr = function(haystack, needle) {

    for(let i = 0; i <= haystack.length - needle.length; i++) {
        let found = true;

        for(let j = 0; j < needle.length; j++) {
            if(haystack[i + j] !== needle[j]) {
                found = false;
                break;
            }
        }
        if(found) return i;
    }
    return -1;
};
```
