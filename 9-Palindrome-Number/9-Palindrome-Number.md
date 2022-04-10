## 9. Palindrome Number

[https://leetcode.com/problems/palindrome-number/]

This problem is to determine if the given integer is palindrome or not.

I'm going to solve this problem with two methods.

First, I'm going to use 'Two pointer method'.

## Two pointers method

First, you need to check the following points:

- The integer is negative (e.g. -10)
- The integer ends with 0 (e.g. 10)

If one of those condition met, you can immeidately return false because they cannot be palindrome.

```
var isPalindrome = function (x) {

	if (x < 0) return false;

	if (x % 10 === 0 && x !== 0) return false;
```

Since you want to use .length method, you need to convert the integer to string (you cannot use .length method for integer)

```
	var str = x.toString();
```

Then create two variables to store current number. One is from left (forward), one is from right (backward)

```
	var forward = 0;
	var backward = str.length - 1;
```

You're going to iterate through the number while it's a positive number (until when it cannot be divided with 10 anymore)

```
	while (x > 0) {

```

Check the number from both side. If each number are not the same, return false.

```
		if (str[forward] !== str[backward]) {
			return false;
		}
```

If above condition doesn't apply, continue iteratting.

```
else {
			forward++;
			backward--;
		}

```

If `forward` and `backward` successfully iterate all the charactors, it's palindrome. You can return true.

```
		return true;
	}
```

## Whole Code (Two pointers method)

```
var isPalindrome = function (x) {
	if (x < 0) return false;

	if (x % 10 === 0 && x !== 0) return false;

	var str = x.toString();
	var forward = 0;
	var backward = str.length - 1;

	while (x > 0) {
		if (str[forward] !== str[backward]) {
			return false;
		} else {
			forward++;
			backward--;
		}
		return true;
	}
};
```

## Reverse as number

Next, I'm going to reverse the number and compare with the original number.

Same as Two pointer method, first you need to check if those condition are met.

```
var isPalindrome = function (x) {

	if (x < 0) return false;

	if (x % 10 === 0 && x !== 0) return false;
```

I'm going to create a variable which stores reversed number of original input.

```
  var reversed = 0;
```

Since I don't want to modify the original input, I create another variable which value is the same number as input.

```
  var original = x;
```

`original` will eventually be smaller than 0. While looping, `reservered` and `original` are going to be the same size number (e.g. 123 and 456, 12 and 45)

```
  while(original > 0) {
```

In order to reverse number, you need to take one digit from right, and put it to left on newly created value, in this case, `reversed`.

By doing `original % 10`, you can get the right most integer.
By doing `reversed * 10`, you can add a 'space' to add remainder.

For example, if the original number was 123, it's going to look like this:

```
First iteration: 0 = (0 * 10 = 0) + (123 % 10 = 3); // reserved became 3
Second iteration: 3 = (3 * 10 = 30) + (12 % 10 = 2); // reserved became 32
Third iteration: 32 = (32 * 10 = 320) + (1 % 10 = 1); // reserved became 321
```

```
    reversed = (reversed * 10) + (original % 10);
```

I cut the last digit (right most digit) by divide the number by 10. Decimal point will be eliminated by using Math.floor. For example, if the number is 123, when divided by 10 it becomes `12.3` , then Math.floor will remove `.3`. The number will get one digit smaller until it become less than 0.

```
    original = Math.floor(original / 10);

```

After finish reversing the number, compare it with the original input. Then return either true or false.

```
  return reversed == x;
```

## Whole code (reverse as number)

```
var isPalindrome = function(x) {

	if (x < 0) return false;
	if (x % 10 === 0 && x !== 0) return false;

  var reversed = 0;
  var original = x;

  while(original > 0) {

    reversed = (reversed * 10) + (original % 10);
    original = Math.floor(original / 10);

  }

  return reversed == x;

}
isPalindrome(123)
```
