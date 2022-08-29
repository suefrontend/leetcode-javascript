var s = "aaabb"

var areOccurrencesEqual = function(s) {
  var result = true;
  var sObject = s.split('').reduce((prev,cur) => {
    console.log("prev", prev)
    console.log("cur", cur)
    prev[cur] ? prev[cur]++ : prev[cur] -1;
    return prev;
  }, {})

  var values = Object.values(sObject);

  for(let i = 1; i < values.length; i++) {
    if(values[i] !== values[0]) {
      return false;
    }
  }
  return result;
};

areOccurrencesEqual(s);
