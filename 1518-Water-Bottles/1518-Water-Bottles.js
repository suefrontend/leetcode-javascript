const numOfBottles = function(numBottles, numExchange) {

  let total = numBottles;

  while(numBottles) {
    let drink = Math.floor(numBottles / numExchange);
    if(!drink) break;
    total += drink;
    numBottles = drink + (numBottles % numExchange);
  }

  return total;
};
numOfBottles(15, 4);
