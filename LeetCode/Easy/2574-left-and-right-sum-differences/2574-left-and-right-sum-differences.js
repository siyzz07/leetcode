/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
      let arr = []
      let arr1=[]

      for(let i = 0 ;i<nums.length ; i++ ){
         
          if(i==0){
            arr.push(0)
            arr1.unshift(0)
          }else{
          arr.push(arr[arr.length-1] + nums[i-1])
          arr1.unshift(arr1[0]+ nums[nums.length-i])
          }


      }

      let ans = []
      for(let i = 0 ; i < arr.length ; i++){
        ans.push(Math.abs(arr[i]- arr1[i]))
      }
      return ans
};