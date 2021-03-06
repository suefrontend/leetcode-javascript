var runningSum = function(nums) {

  const arr = [];
  let sum = 0;

  for(let i = 0; i < nums.length; i++) {
    // 0 + 1
    sum = sum + nums[i];
    console.log(sum, "+", nums[i])

    arr.push(sum);
    console.log(arr)
  }
  return arr;

};
runningSum([1,2,3,4]);
