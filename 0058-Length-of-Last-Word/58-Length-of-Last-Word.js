var lengthOfLastWord = function(s) {
  let count = 0;
  let beforeFirstNonEmptyChar = true;

  if(s.length === 0) {
    return count;
  }

  for (var i = s.length - 1; i >= 0; i--) {

    if(s.charAt(i) !== ' ') {
      count++;
      beforeFirstNonEmptyChar = false;
    } else {
      if(!beforeFirstNonEmptyChar) {
        break;
      }
    }
  }
  return count;
};
lengthOfLastWord("Hello World")
