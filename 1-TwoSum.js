// // Given an array of integers,
// // return indices of the two numbers such that they add up to a
// // specific target length

// const twoSum = (nums, target) => {
// 	let storage = {};

// 	for (let [index, num] of nums.entries()) {
// 		if (storage[num] !== undefined) return [storage[num], index];
// 		storage[target - num] = index;
// 	}
// };

// console.log(twoSum([2, 7, 8, 4], 9));

// オブジェクトにaとbを引数に取って
// それをたして返すメソッドaddをオブジェクト(変数名obj)にもつコードを書いてみてください

// const obj = {
// 	add: function (a, b) {
// 		return a + b;
// 	},
// };

// console.log(obj.add(1, 2));

const props = {
	add: (a, b) => a + b,
};

console.log(props.add(1, 2));
