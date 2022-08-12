var restoreString = function (s, indices) {
  let stringToArray = s.split('');
  let arr = [];

  for (let i = 0; i < stringToArray.length; i++) {

      arr[indices[i]] = stringToArray[i];
      // arr[indices[0] -> 4] = stringToArray[0] -> c
      // arr[indices[1] -> 5] = stringToArray[1] -> o
      // arr[indices[2] -> 6] = stringToArray[2] -> d
      // arr[indices[3] -> 7] = stringToArray[3] -> e
      // arr[indices[4] -> 0] = stringToArray[4] -> l
      // arr[indices[5] -> 2] = stringToArray[5] -> e
      // arr[indices[6] -> 1] = stringToArray[6] -> e
      // arr[indices[7] -> 3] = stringToArray[7] -> t

      // [ "", "", "",  "", "c" ]
      // [ "", "", "",  "", "c", "o" ]
      // [ "", "", "",  "", "c", "o", "d" ]
      // [ "", "", "",  "", "c", "o", "d", "e" ]
      // [ "l", "", "", "", "c", "o", "d", "e" ]
      // [ "l", "", "e", "", "c", "o", "d", "e" ]
      // [ "l", "e", "e", "", "c", "o", "d", "e" ]
      // [ "l", "e", "e", "t", "c", "o", "d", "e" ]


  }

  return arr.join('');
};
restoreString("codeleet", [4,5,6,7,0,2,1,3])
