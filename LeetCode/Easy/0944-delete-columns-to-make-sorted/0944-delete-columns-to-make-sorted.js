/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count = 0
    let arr = []
    for(let i = 0 ; i < strs[0].length ; i ++){
         arr[i] = []
        for(let j = 0 ; j< strs.length ; j++){
            arr[i].push(strs[j][i])
        }
    }
    for(let i = 0 ; i< arr.length ; i++){
        let val = [...arr[i]].join('')
        let aa = [...arr[i]].join('')
        let sortB = val.split('').sort().join('')
        if( aa != sortB ){
            count++
        }
    }
    return count
};