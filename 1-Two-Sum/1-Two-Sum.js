var twoSum = function (nums, target) {
	var obj = new Map();

	var complement = target - nums[index];

	if (obj.has(complement)) {
		return [obj.get(nums[i]), i];
	} else {
		obj.set(complement, i);
	}
};
