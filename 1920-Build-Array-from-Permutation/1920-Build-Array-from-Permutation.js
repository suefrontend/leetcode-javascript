var nums = [0,2,1,5,3,4];

var buildArray = function(nums) {
    var ans = [];

    for(var i = 0; i < nums.length; i++) {
      ans.push(nums[nums[i]]);
    }

    return ans;
};
