/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
        let obj = {}
        for(let i = 0 ; i < strs.length ; i++){

            let arr = new Array(26).fill(0)

            for(let j = 0 ; j< strs[i].length ; j++){
                
                    let code = strs[i].charCodeAt(j)
                    let val = code-97
                    arr[val]++

            }


            if(obj[arr.join('#')]){
                obj[arr.join('#')].push(strs[i])
            }else{
                obj[arr.join('#')] = [strs[i]]
            }
            

        }

        // console.log(obj)

        return Object.values(obj)

};