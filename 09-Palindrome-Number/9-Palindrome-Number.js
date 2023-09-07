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

var isPalindrome = function (x) {
	if (x < 0) return false;
	if (x % 10 === 0 && x !== 0) return false;

	var reversed = 0;
	var original = x;

	while (original > 0) {
		reversed = reversed * 10 + (original % 10);
		original = Math.floor(original / 10);
	}

	return reversed == x;
};
