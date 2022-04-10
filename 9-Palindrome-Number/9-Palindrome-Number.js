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
isPalindrome(2002);
