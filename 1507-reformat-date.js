const reformatDate = function(date) {
  // Split date string
  // eg. 20th Oct 2052 -> 20 / Oct / 2052

  const str = date.split(' ');

  console.log(str)

  // Dealing with date
  // Last two strings are unnecessary: st, nd
  // So extract
  // If date.length is 3 (2nd) add 0 to the beginning
  if (str[0].length === 3) {
      str[0] = '0'.concat(str[0].substring(0,1))
  }
  // If date.length is 4, just extract first 2 digits
  else {
    str[0] = str[0].substring(0,2);
  }

  // Dealing with month
  // Create an object and assign key/value pair for each month
  const months = {
    'Jan': 01,
    'Feb': 02,
    'Mar': 03,
    'Apr': 04,
    'May': 05,
    'Jun': 06,
    'Jul': 07,
    'Aug': 08,
    'Sep': 09,
    'Oct': 10,
    'Nov': 11,
    'Dec': 12
  }

  console.log(str[1])
  return str[2]+months[str[1]]+str[0]
}
reformatDate("20th Oct 2052");
console.log(months['Dec'])
