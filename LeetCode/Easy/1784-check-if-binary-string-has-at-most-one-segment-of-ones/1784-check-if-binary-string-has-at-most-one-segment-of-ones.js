/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
 let ones = s.split('').filter((value)=>value == '1')
if(ones.length ==1)return true
if(ones.length>1){
    return s.includes(ones.join(''))
}
return false

};