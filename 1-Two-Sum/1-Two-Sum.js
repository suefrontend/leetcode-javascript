var twoSum = function (nums, target) {
	var obj = {};

	for (var i = 0; i < nums.length; i++) {
		var complement = target - nums[i];

		if (complement in obj) {
			return [obj[complement], i];
		} else {
			obj[nums[i]] = i;
		}
	}
	return [];
};
