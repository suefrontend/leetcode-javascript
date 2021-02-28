const findGoodPairs = function(nums) {
  let count = 0;

  for(i = 0; i < nums.length; i++) {
    for(j=i+1; j < nums.length; j++) {
        if(nums[i] === nums[j]) {
          count++;
        }
    }
  }

  return count;
}

findGoodPairs([1,1,1,1]);
