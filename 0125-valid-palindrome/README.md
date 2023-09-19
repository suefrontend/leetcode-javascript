## Valid Palindrome

[Question](https://leetcode.com/problems/valid-palindrome/)

### Approach

1. Remove all non-alphabetic characters from the input string using a regular expression. Then, convert it to lowercase and trim any leading or trailing spaces.
2. Create two pointers to iterate through the string: one starts from the beginning of the string (`left`), and the other starts from the end of the string (`right`).
3. While `left` is less than or equal to `right`, meaning until the pointers meet at the center of the string, continue looping and compare the characters at `left` and `right`.
4. If the characters at the `left` and `right` positions are different, the string is not a palindrome. Break out of the loop and return false.
5. After finishing the iteration, it signifies that the string is a palindrome. Return true.

### Whole code

```
var isPalindrome = function(s) {
    var str = s.replace(/[^a-z0-9]/gi, '').toLowerCase().trim();

    var left = 0;
    var right = str.length - 1;

    while(left <= right) {
        if(str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
```
