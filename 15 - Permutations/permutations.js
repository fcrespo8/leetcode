/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = []
  if (nums.length === 1) {
      result.push(nums)
      return result
  }
  const dfs = (i, nums, aux) => {
    if (i >= nums.length){
      result.push(aux.join(''));
      return;
    }
    for(let num of nums){
      aux.push(num);
      dfs(i + 1, nums, aux);
      aux.pop();
    }
  }
  dfs(0, nums, [])
  return result;
};
// var permute = function(nums) {
//   let result = []
//   if (nums.length === 1) {
//       result.push(nums)
//       return result
//   }
//   result.push(nums)
//   let aux = []
//   for(let i=0; i < nums.length; i++){
//       for(let j=i+1; j < nums.length; j++){
//           aux.push(nums[j])
//       }
//       aux.push(nums[i])
//       result.push(aux)
//       return result
//   }
//   return result
// };
