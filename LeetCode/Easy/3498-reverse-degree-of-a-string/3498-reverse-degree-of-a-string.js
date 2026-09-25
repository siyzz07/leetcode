/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {

    let sum = s.split('').reduce((acc,value,index,arr)=> acc+=(27 -(s.charCodeAt(index)-96)) * (index+1),0)
    return sum

};