## Roman to Integer

[Question](https://leetcode.com/problems/roman-to-integer/)

### Approach

1. **Initialization**<br>
   Create a variable `result`. This will be used to store the total integer value obtained from the Roman nmeral string.
2. **Hash Table**<br>
   Create a hash table to map Roman numeral symbols to their corresponding integer values.
3. **For loop**<br>
   Loop through the input Roman numeral string.
4. **Normal cases**<br>
   In most cases, Roman numerals increase from left to right. Simply add its integer value to the `result`.
5. **Special cases**<br>
   However, Roman numerals can have exceptions, such as 'IV' (4), 'IX' (9), 'XL' (40), 'XC' (90), 'CD' (400), and 'CM' (900). To handle these cases, compare the current symbol's integer value with the next symbol's value. It the next symbol is greater, substract the current symbol's value from the next symbol's value and add it to `result`.
6. **Increment `i`**
   To avoid double-counting, increment `i` by 1 and skip processing the next symbol in the loop.
7. **Final result**
   Return `result` which contains the total integer value.

```
var romanToInt = function(s) {

    var result = 0;

    var symbol = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    for(var i = 0; i < s.length; i++) {
        let cur = symbol[s[i]];
        let next = symbol[s[i+1]];

        if(next > cur) {
            result += next - cur;
            i++;
        } else {
            result += cur;
        }
    }
    return result;
};
```
