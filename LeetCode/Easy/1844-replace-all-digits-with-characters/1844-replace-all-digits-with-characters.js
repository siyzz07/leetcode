/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let str = ''
    for(let i = 0 ; i< s.length ; i++){
        if(i%2==0){
            str +=s[i]
        }else{
          
            let charCode = s.charCodeAt(i-1)
            let val = charCode+ Number(s[i])
            letter = String.fromCharCode(val)
            str +=letter
        }
    }
    return str
    
};