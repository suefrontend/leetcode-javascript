var isValid = function(s) {

  let bracket = {
    '(':')',
    '[':']',
    '{':'}'
  }
  let stack = [];

  for(let char of s) {
    console.log(char)
    if(bracket[char]) {
      console.log("bracket[char]", bracket[char]);
      stack.push(bracket[char])
    } else {
      // stack.pop = stackの最後の文字
      if(stack.pop() !== char) return false;
    }
  }
  return (!stack.length);
}
isValid("()[]{}");
