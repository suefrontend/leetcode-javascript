const coundOddNumbers = function(low, high) {
  let count = 0;

  for(let i = low; i < high+1; i++) {
    if(i % 2 !== 0) {
      count++;
    }
  }

  return count;
}
coundOddNumbers(3,7);
