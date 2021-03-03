var searchInsert = function(nums, target) {

  for(var i = 0; i < nums.length; i++) {
    if(nums[i] >= target) {
      return i;
    } else {
      index++;
    }
  }
  return nums.length;
}
