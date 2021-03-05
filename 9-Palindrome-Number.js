var isPalindrome = function(x) {

  if(x < 0) {
    return false;
  }

  return x === reversedInteger(x);
};

let reversedInteger = function(x) {
  let reversed = 0;

  while(x > 0) {
    // 49 -> 90
    // 4 -> 40
    //
    reversed = (reversed * 10) + (x % 10);
    x = Math.floor(x / 10)
  }

  return reversed;
}
