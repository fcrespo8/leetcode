/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  for (let i1 = 0; i1 < nums.length; i1++) {
      for (let i2 = i1 + 1; i2 < nums.length; i2++) {
          if (nums[i1] + nums[i2] == target) {
              return [i1, i2]
          }
      }
  }
};

nums = [2,7,11,15]
target = 9

var twoSum = function(nums, target) {
  const indices = new Map(); // empty

  for (let index = 0; index < nums.length; index++) {
      const complement = target - nums[index]; // comp = 9 - 2 = 7
      //comp = 9-7 = 2

      if (indices.has(complement)) { // false - true
          return [indices.get(complement), index] // [2, 0]
      }

      indices.set(nums[index], index) // [2, ]
  }
};
