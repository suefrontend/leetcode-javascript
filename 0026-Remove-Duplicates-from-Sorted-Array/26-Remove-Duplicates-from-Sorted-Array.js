var removeDuplicates = function(nums) {

  // what is the current value?
  let pointer1 = 0;

  // is the next value is the same as previous value?
  for(var pointer2 = 1; pointer2 < nums.length; pointer2++) {


    if(nums[pointer1] !== nums[pointer2]) {
      pointer1++;
    }
  }

  // we need to store the first-occurred value to somewhere
  return pointer1;

};


removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
