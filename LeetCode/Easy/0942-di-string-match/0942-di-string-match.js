/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    s+='I'

    let arr = []
    let inc = -1
    let dec = s.length

    for(let i = 0 ; i<s.length ; i++){
        if(s[i] == "I"){
           arr.push(++inc)
        }else{
            arr.push(--dec)
        }
    }
    return arr

};