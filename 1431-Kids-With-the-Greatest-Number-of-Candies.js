var kidsWithCandies = function(candies, extraCandies) {

  // get the highest number amongst candies using Math.max
  const max = Math.max(...candies)

  // store results in this array
  let result = [];

  for(let i = 0; i < candies.length; i++) {
    let currentValue = candies[i];

    result.push(currentValue + extraCandies >= max);
  }

  return result;

};
