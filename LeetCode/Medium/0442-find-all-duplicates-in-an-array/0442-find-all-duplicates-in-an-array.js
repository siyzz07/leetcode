/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    function duplicate(arr){
        let list=new Set()
        let a=[]
        for(let i=0;i<arr.length;i++){
            if(list.has(arr[i])){
                a.push(arr[i])
            }else{
                list.add(arr[i])
            }
        }
        return a
    }
  return duplicate(nums)
};