/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const array = nums1.concat(nums2).sort((a,b)=>a-b)
  let sum = 0
  if (array.length % 2 !== 0) {
      const index = Math.floor(array.length/2)
      const result = array[index]
      return result
  } else {
      const middleIndex = array.length/2
      const n1 = array[middleIndex]
      const n2 = array[middleIndex-1]
      result = (n1+n2)/2
      return result
  }
};
