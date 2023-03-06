/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
//  */

// var twoSum = function(nums, target) {
//   for (let i1 = 0; i1 < nums.length; i1++) {
//       for (let i2 = i1 + 1; i2 < nums.length; i2++) {
//           if (nums[i1] + nums[i2] == target) {
//               return [i1, i2]
//           }
//       }
//   }
// };

var twoSum = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i] //num1=2--7
    let num2 = target - num1 //num2=7--2
    if (map.has(num2)){
      return [map.get(num2), i]//return array with the first index and the index of num2
    }
    map.set(num1, i);//map = [2]
  }
};
