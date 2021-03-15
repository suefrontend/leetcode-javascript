var numJewelsInStones = function(jewels, stones) {

  // const arr = [];
  const result = [];

  // for (let i = 0; i < jewels.length; i++) {
  //     arr.push(jewels[i]);
  // }

  for(let i = 0; i < stones.length; i++) {

    for(let j = 0; j < jewels.length; j++) {

      console.log(stones[i]);
      if(stones[i] === jewels[j]) {
        result.push(stones[i]);
      }
    }

  }
  return result.length;

};
numJewelsInStones("aA", "aAAbbbb");
