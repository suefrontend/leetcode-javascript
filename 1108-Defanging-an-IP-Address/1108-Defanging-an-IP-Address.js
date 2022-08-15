var defangIPaddr = function(address) {
  let str = address.split('.')
  //console.log(str)

  let newStr = str.join('[.]');
  //console.log(newStr)

  return newStr;
};
