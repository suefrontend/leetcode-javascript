var runningSum = function(nums) {

  const arr = [];
  let sum = 0;

  for(let i = 0; i < nums.length; i++) {
    // 0 + 1
    sum = sum + nums[i];


    arr.push(sum);

  }
  return arr;

};
runningSum([1,2,3,4]);
