/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1 = nums1.concat(...nums2)
    nums1 = nums1.sort((a,b) => a-b)
   let midVal
   if(nums1.length %2 == 0){
    let mi = Math.floor(nums1.length/2)
    console.log(nums1.length,mi)
    let val1 = nums1[mi]
    let val2 = nums1[mi-1]
    midVal = (val1 + val2) /2

   }else{
    let mi = Math.floor(nums1.length/2)
    midVal = nums1[mi]
    
   }

  return midVal
};